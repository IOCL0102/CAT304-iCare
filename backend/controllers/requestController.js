const mongoose = require('mongoose');
const Request = require('../models/requestModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');
const Appointment = require('../models/appointmentModel')

// get all requests
const getRequests = async (req, res) => {
    
    let query, requests
    switch(req.user.type){
        case 'doctor':
            // to filtered by doctor_id
            query = { doctor_id: { $eq: req.user._id}}
            // currently sort by createdAt in ascending order
            requests = await Request.find(query).populate("patient_id").sort({createdAt: 1}).exec();
            // need access patient details too
            // can further limit the fields in populated patient_id
            // only access filtered patients list related to the doctor
            break;
        case 'patient':
            // to filtered by patient_id
            query = { patient_id: { $eq: req.user._id}}
            // currently sort by createdAt in ascending order
            requests = await Request.find(query).populate("doctor_id").sort({createdAt: 1}).exec();
            // need access doctors details too
            // can further limit the fields in populated doctor_id
            // only access filtered patients list related to the patients
            break;
        default:
            throw Error(`Invalild type: ${req.user.type}`)
    }

    res.status(200).json(requests);
}

// see if need to add a function to get all requests with a doctor and a patient

// get a single request
const getRequest = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    let request
    switch(req.user.type){
        case 'doctor':
            request = await Request.findById(id).populate('patient_id').exec()
            // need access patient details too
            // can further limit the fields in populated patient_id
            // only access single patient as doctor's side already have filtered patients list
            break;
        case 'patient':
            request = await Request.findById(id)
            break;
        default:
            throw Error(`Invalild type: ${req.user.type}`)
    }

    if(!request){
        return res.status(404).json({error: 'No such request'});
    }

    res.status(200).json(request);
}

// create a request
const createRequest = async (req,res)=>{
    // mainly here is to check if the data is valid with the structure first before passing to mongodb

    // check request timelslot is within 1 hour or not if need validation for simple process

    try{
        // add new document
        const request = await Request.create(req.body);

        // Trigger
        // update the doctor's and patient's requests array for 2 way referencing
        const doctor = await Doctor.updateOne(
            {_id: request.doctor_id},
            {$push: {
                "requests": request._id
            }}
        );
        // Trigger
        const patient = await Patient.updateOne(
            {_id: request.patient_id},
            {$push: {
                "requests": request._id
            }}
        );
        // confirm doctor and patient exists when creating request hence no need to check if doctor exists
        res.status(200).json(request);
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

// update a request
const updateRequest = async (req, res) => {
    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const request = await Request.findOneAndUpdate({_id: id},{...req.body}) //... means spread operator, so it will spread the req.body into dedicated key-value pairs
    // findOneandUpdate is used instead of updateOne to fetch the field values 

    if(!request){
        return res.status(404).json({error: 'No such request'});
    }

    // Trigger
    // On status update to "Accepted" need to create doc in appointment collection (auto populate start time and end time based on the time slots)
    if(req.body.status==="Accepted"){
        try{
            // Trigger
            // update last_checked before created new appointment doc
            try{
                const patient_update = await Patient.updateLastChecked(request.patient_id)
            }catch(error){
                console.log({error: error.message})
            }

            const appointment = await Appointment.acceptRequest(request)

            // Trigger
            // update the doctor's and patient's appointments array for 2 way referencing
            const doctor = await Doctor.updateOne(
                {_id: request.doctor_id},
                {$push: {
                    "appointments": appointment._id
                }}
            );
            // Trigger
            const patient = await Patient.updateOne(
                {_id: request.patient_id},
                {$push: {
                    "appointments": appointment._id
                }}
            );
            // confirm doctor and patient exists when creating appointment hence no need to check if doctor exists
        }catch(error){
            console.log({error: error.message})
        }
    }

    // Assume if 'Accepted', no need to show on requests in front end, no need to deal with 'Accepted' > 'Rejected' condition

    res.status(200).json(request); 
}

/* NOT USED */

// delete a request
const deleteRequest = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const request = await Request.findByIdAndDelete(id);
    // replace deleteOne with findByIdAndDelete to get the deleted document fields

    if(!request){
        return res.status(404).json({error: 'No such request'});
    }

    // Trigger
    // update the doctor's and patient's requests array for 2 way referencing
    const doctor = await Doctor.updateOne(
        {_id: request.doctor_id},
        {$pull: {
            "requests": request._id
        }}
    );
    // Trigger
    const patient = await Patient.updateOne(
        {_id: request.patient_id},
        {$pull: {
            "requests": request._id
        }}
    );
    // confirm doctor and patient exists when creating request hence no need to check if doctor exists
    res.status(200).json(request);
}

module.exports = {
    getRequests,
    getRequest,
    createRequest,
    deleteRequest,
    updateRequest
}
