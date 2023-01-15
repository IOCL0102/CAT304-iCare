const mongoose = require('mongoose');
const Doctor = require('../models/doctorModel');

// get all doctors
// only this func is needed for now
const getDoctors = async (req, res) => {
    // currently sort by name in ascending order
    const doctors = await Doctor.find().sort({name: 1});

    res.status(200).json(doctors);
}

// get a single doctor
const getDoctor = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const doctor = await Doctor.findById(id);

    if(!doctor){
        return res.status(404).json({error: 'No such doctor'});
    }

    res.status(200).json(doctor);
}

// create a doctor
const createDoctor = async (req,res)=>{
    // mainly here is to check if the data is valid with the structure first before passing to mongodb
    try{
        // add new document
        const doctor = await Doctor.create(req.body);
        res.status(200).json(doctor);
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

// delete a doctor
const deleteDoctor = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const doctor = await Doctor.deleteOne({_id: id}); 

    if(!doctor){
        return res.status(404).json({error: 'No such doctor'});
    }

    res.status(200).json(doctor);
}

// update a doctor
const updateDoctor = async (req, res) => {
    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const doctor = await Doctor.updateOne({_id: id},{...req.body}) //... means spread operator, so it will spread the req.body into dedicated key-value pairs

    if(!doctor){
        return res.status(404).json({error: 'No such doctor'});
    }

    res.status(200).json(doctor); 
}

module.exports = {
    getDoctors,
    getDoctor,
    createDoctor,
    deleteDoctor,
    updateDoctor
}
