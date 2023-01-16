const mongoose = require('mongoose');
const Request = require('../models/requestModel');

// get all requests
const getRequests = async (req, res) => {
    // currently sort by createdAt in ascending order
    const requests = await Request.find().sort({createdAt: 1});

    res.status(200).json(requests);
}

// see if need to add a function to get all requests which have appointments with a doctor and a patient

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
    try{
        // add new document
        const request = await Request.create(req.body);
        res.status(200).json(request);
    }catch(error){
        res.status(400).json({error: error.message})
    }

}
// have a .then() to update the patient's & doctor's requests array if patient and doctor track their requests

// delete a request
const deleteRequest = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const request = await Request.deleteOne({_id: id}); 

    if(!request){
        return res.status(404).json({error: 'No such request'});
    }

    res.status(200).json(request);
}

// update a request
const updateRequest = async (req, res) => {
    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const request = await Request.updateOne({_id: id},{...req.body}) //... means spread operator, so it will spread the req.body into dedicated key-value pairs

    if(!request){
        return res.status(404).json({error: 'No such request'});
    }

    res.status(200).json(request); 
}

// On status update to "Accepted" need to insert into appointment collection

module.exports = {
    getRequests,
    getRequest,
    createRequest,
    deleteRequest,
    updateRequest
}
