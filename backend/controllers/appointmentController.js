const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');

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
        res.status(200).json(appointment);
    }catch(error){
        res.status(400).json({error: error.message})
    }

}
// have a .then() to update the patient's & doctor's appointments array if patient and doctor track their appointments

// delete a appointment
const deleteAppointment = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const appointment = await Appointment.deleteOne({_id: id}); 

    if(!appointment){
        return res.status(404).json({error: 'No such appointment'});
    }

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


module.exports = {
    getAppointments,
    getAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment
}
