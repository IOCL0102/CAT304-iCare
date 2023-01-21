const mongoose = require('mongoose');
const Request = require('../models/requestModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');
const Appointment = require('../models/appointmentModel')

// get all requests
const getRequests = async (req, res) => {
    // currently sort by createdAt in ascending order
    const requests = await Request.find().sort({createdAt: 1});

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

    const request = await Request.findById(id);

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
        // update the doctor's and patient's requests array for 2 way referencing
        const doctor = await Doctor.updateOne(
            {_id: request.doctor},
            {$push: {
                "requests": request._id
            }}
        );
        const patient = await Patient.updateOne(
            {_id: request.patient},
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

    // On status update to "Accepted" need to create doc in appointment collection (auto populate start time and end time based on the time slots)
    if(req.body.status==="Accepted"){
        try{
            await Appointment.acceptRequest(request)
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

    // update the doctor's and patient's requests array for 2 way referencing
    const doctor = await Doctor.updateOne(
        {_id: request.doctor},
        {$pull: {
            "requests": request._id
        }}
    );
    const patient = await Patient.updateOne(
        {_id: request.patient},
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
