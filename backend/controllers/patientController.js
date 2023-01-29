const mongoose = require('mongoose');
const Patient = require('../models/patientModel');
const Appointment = require('../models/appointmentModel')

// get all patients
const getPatients = async (req, res) => {

    let query, patients
    switch(req.user.type){
        case 'doctor':
            // to filtered by doctor_id
            query = { doctor_id: { $eq: req.user._id}}
            // currently sort by name in ascending order
            queryResults = await Appointment.find(query, {
                start_datetime:1, 
                end_datetime:1, 
                title:1, 
                patient_id:1,
                doctor_id:1, 
                request_id:1, 
                schema_ver:1, 
                createdAt:1, 
                updatedAt:1, 
                __v:1}).populate({
                path: "patient_id",
                select: "email photo name gender age last_checked birth_date"
            }).sort({createdAt: 1}).exec();
            // map the data to set patient fields in the document for easier analytics processing
            patients = queryResults.map(result => {
                // convert mongoose object to json object first
                let result_json = result.toObject()
                let patient_doc = result_json.patient_id

                result_json['patient_email'] = patient_doc.email
                result_json['patient_photo'] = patient_doc.photo
                result_json['patient_name'] = patient_doc.name
                result_json['patient_gender'] = patient_doc.gender 
                result_json['patient_age'] = patient_doc.age 
                result_json['last_checked'] = patient_doc.last_checked
                result_json['patient_birthdate'] = patient_doc.birth_date
                result_json['patient_id'] = patient_doc._id
                
                return result_json
            })
            // only access patient profiles details with partial appointment details
            // only access filtered patients list related to the doctor
            break;
        case 'patient':
            // to filtered by patient_id
            query = { _id: { $eq: req.user._id}}
            // currently sort by name in ascending order
            patients = await Patient.find(query).sort({name: 1});
            // only access own details for patient
            break;
        default:
            throw Error(`Invalild type: ${req.user.type}`)
    }

    res.status(200).json(patients);
}

// get a single patient
const getPatient = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    let patient
    switch(req.user.type){
        case 'doctor':
            patient = await Patient.findById(id).populate('appointments').exec()
            // need access past appointments details too
            // can further limit the fields in populated appointments
            // only access single patient based on the filtered patients list which has appointment with the doctor
            break;
        case 'patient':
            patient = await Patient.findById(id)
            break;
        default:
            throw Error(`Invalild type: ${req.user.type}`)
    }

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
