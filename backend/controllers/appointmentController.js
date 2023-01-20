const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');

// get all appointments
const getAppointments = async (req, res) => {
    // currently sort by createdAt in ascending order
    const appointments = await Appointment.find().sort({createdAt: 1});

    res.status(200).json(appointments);
}

// see if need to add a function to get all appointments with a doctor and a patient

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
    try{
        // add new document
        const appointment = await Appointment.create(req.body);
        // update the doctor's and patient's appointments array for 2 way referencing
        const doctor = await Doctor.updateOne(
            {_id: appointment.doctor},
            {$push: {
                "appointments": appointment._id
            }}
        );
        const patient = await Patient.updateOne(
            {_id: appointment.patient},
            {$push: {
                "appointments": appointment._id
            }}
        );
        // confirm doctor and patient exists when creating appointment hence no need to check if doctor exists
        res.status(200).json(appointment);
    }catch(error){
        res.status(400).json({error: error.message})
    }

}
// have a if else for if > 1 appointment, then return update the all appointments last checked field 

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

    // update the doctor's and patient's appointments array for 2 way referencing
    const doctor = await Doctor.updateOne(
        {_id: appointment.doctor},
        {$pull: {
            "appointments": appointment._id
        }}
    );
    const patient = await Patient.updateOne(
        {_id: appointment.patient},
        {$pull: {
            "appointments": appointment._id
        }}
    );
    // confirm doctor and patient exists when creating appointment hence no need to check if doctor exists
    res.status(200).json(appointment);
}

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

// when prescription is updated, use workflow to auto generate notifications list and auto populate the notifications field (description)


module.exports = {
    getAppointments,
    getAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment
}
