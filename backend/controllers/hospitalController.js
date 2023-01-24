const mongoose = require('mongoose');
const Hospital = require('../models/hospitalModel');

// get all hospitals
// only this func is needed for now
const getHospitals = async (req, res) => {
    // currently sort by facility_name in ascending order
    const hospitals = await Hospital.find().sort({facility_name: 1});

    res.status(200).json(hospitals);
}

// get a single hospital
const getHospital = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const hospital = await Hospital.findById(id);

    if(!hospital){
        return res.status(404).json({error: 'No such hospital'});
    }

    res.status(200).json(hospital);
}

/* NOT USED in Front end */

// create a hospital
const createHospital = async (req,res)=>{
    // mainly here is to check if the data is valid with the structure first before passing to mongodb
    try{
        // add new document
        const hospital = await Hospital.create(req.body);
        res.status(200).json(hospital);
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

// delete a hospital
const deleteHospital = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const hospital = await Hospital.deleteOne({_id: id}); 

    if(!hospital){
        return res.status(404).json({error: 'No such hospital'});
    }

    res.status(200).json(hospital);
}

// update a hospital
const updateHospital = async (req, res) => {
    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const hospital = await Hospital.updateOne({_id: id},{...req.body}) //... means spread operator, so it will spread the req.body into dedicated key-value pairs

    if(!hospital){
        return res.status(404).json({error: 'No such hospital'});
    }

    res.status(200).json(hospital); 
}

module.exports = {
    getHospitals,
    getHospital,
    createHospital,
    deleteHospital,
    updateHospital
}
