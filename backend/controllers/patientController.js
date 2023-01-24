const mongoose = require('mongoose');
const Patient = require('../models/patientModel');

// get all patients
const getPatients = async (req, res) => {
    // currently sort by name in ascending order
    const patients = await Patient.find().sort({name: 1});

    res.status(200).json(patients);
}

// see if need to add a function to get all patients which have appointments with a doctor

// get a single patient
const getPatient = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const patient = await Patient.findById(id);

    if(!patient){
        return res.status(404).json({error: 'No such patient'});
    }

    res.status(200).json(patient);
}

// create a patient
const createPatient = async (req,res)=>{
    // mainly here is to check if the data is valid with the structure first before passing to mongodb
    try{
        // add new document
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
    }catch(error){
        res.status(400).json({error: error.message})
    }

}


// delete a patient
const deletePatient = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const patient = await Patient.deleteOne({_id: id}); 

    if(!patient){
        return res.status(404).json({error: 'No such patient'});
    }

    res.status(200).json(patient);
}

// update a patient
const updatePatient = async (req, res) => {
    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const patient = await Patient.updateOne({_id: id},{...req.body}) //... means spread operator, so it will spread the req.body into dedicated key-value pairs

    if(!patient){
        return res.status(404).json({error: 'No such patient'});
    }

    res.status(200).json(patient); 
}

module.exports = {
    getPatients,
    getPatient,
    createPatient,
    deletePatient,
    updatePatient
}
