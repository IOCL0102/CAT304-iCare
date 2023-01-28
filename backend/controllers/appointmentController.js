const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');

// get all appointments
const getAppointments = async (req, res) => {
    
    let query, appointments
    switch(req.user.type){
        case 'doctor':
            // to filtered by doctor_id
            query = { doctor_id: { $eq: req.user._id}}
            // currently sort by createdAt in ascending order
            appointments = await Appointment.find(query).populate("patient_id").sort({createdAt: 1}).exec();
            // need access patient details too
            // can further limit the fields in populated patient_id
            // only access filtered patients list related to the doctor
            break;
        case 'patient':
            // to filtered by patient_id
            query = { patient_id: { $eq: req.user._id}}
            // currently sort by createdAt in ascending order
            appointments = await Appointment.find(query).populate("doctor_id").sort({createdAt: 1}).exec();
            // need access doctors details too
            // can further limit the fields in populated doctor_id
            // only access filtered patients list related to the patients
            break;
        default:
            throw Error(`Invalild type: ${req.user.type}`)
    }

    res.status(200).json(appointments);
}

// get a single appointment
const getAppointment = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const appointment = await Appointment.findById(id);

    if(!appointment){
        return res.status(404).json({error: 'No such appointment'});
    }

    res.status(200).json(appointment);
}

// create a appointment
const createAppointment = async (req,res)=>{
    // mainly here is to check if the data is valid with the structure first before passing to mongodb

    // since only doctor can create appointment, no need to check for user type
    const doctor_id = req.user._id;

    try{
        
        // Trigger
        // update last_checked before created new appointment doc
        try{
            await Patient.updateLastChecked(req.body.patient_id)
        }catch(error){
            console.log({error: error.message})
        }

        // add new document
        const appointment = await Appointment.create({...req.body, doctor_id: doctor_id});

        // Trigger
        // update the doctor's and patient's appointments array for 2 way referencing
        await Doctor.updateOne(
            {_id: appointment.doctor_id},
            {$push: {
                "appointments": appointment._id
            }}
        );
        // Trigger
        await Patient.updateOne(
            {_id: appointment.patient_id},
            {$push: {
                "appointments": appointment._id
            }}
        );
        // confirm doctor and patient exists when creating appointment hence no need to check if doctor exists

        // when prescription is added, for each medicine, auto generate notifications list and auto populate the notifications field (description) and use workflow to send notification

        res.status(200).json(appointment);
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

// create new medicine 
const createMedicine = async(req, res) => {

}
// later add notifications generations based on prescription - single medicine changes

// update new medicine
const updateMedicine = async(req, res) => {

}
// later change notifications based on prescription - single medicine changes

// update a appointment
const updateAppointment = async (req, res) => {
    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const appointment = await Appointment.updateOne({_id: id},{...req.body}) //... means spread operator, so it will spread the req.body into dedicated key-value pairs

    if(!appointment){
        return res.status(404).json({error: 'No such appointment'});
    }

    res.status(200).json(appointment); 
}

/* NOT USED */

// delete a appointment
const deleteAppointment = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const appointment = await Appointment.findByIdAndDelete(id); 
    // replace with deleteOne with findByIdAndDelete to get the deleted document fields

    if(!appointment){
        return res.status(404).json({error: 'No such appointment'});
    }

    // Trigger
    // update the doctor's and patient's appointments array for 2 way referencing
    const doctor = await Doctor.updateOne(
        {_id: appointment.doctor_id},
        {$pull: {
            "appointments": appointment._id
        }}
    );
    // Trigger
    const patient = await Patient.updateOne(
        {_id: appointment.patient_id},
        {$pull: {
            "appointments": appointment._id
        }}
    );
    // confirm doctor and patient exists when creating appointment hence no need to check if doctor exists

    // if got extra time, once delete appointment, update last_checked for the patient document
    res.status(200).json(appointment);
}


module.exports = {
    getAppointments,
    getAppointment,
    createAppointment,
    createMedicine,
    updateMedicine,
    deleteAppointment,
    updateAppointment
}
