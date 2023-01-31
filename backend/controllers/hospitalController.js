const mongoose = require('mongoose');
const Hospital = require('../models/hospitalModel');

// get all hospitals
// only this func is needed for now
const getHospitals = async (req, res) => {
    let hospitals
    switch(req.user.type){
        case 'doctor':
            // currently sort by facility_name in ascending order
            hospitals = await Hospital.find().sort({facility_name: 1});
            break;
        case 'patient':
            // currently sort by facility_name in ascending order
            hospitals = await Hospital.find().sort({address: 1});
            // use another function as requires POST method
            break;
        default:
            throw Error(`Invalild type: ${type}`)
    }

    res.status(200).json(hospitals);
}

// Get hospitals by nearest location through geospatial query
const getNearestHospital = async (req, res) => {
    
    const defaultMaxDistance = req.body.distance ? req.body.distance : 10000; // in m, =10km
    const defaultMinDistance = 0 

    const query = {
        // geospatial query
        $geoNear: {
            near: {
                type: "Point",
                coordinates: [req.body.longitude, req.body.latitude]
                // order is important
            }, // location to query near
            distanceField: "distance", // specify field to store the distance in
            maxDistance: defaultMaxDistance, // in m, later modify to req.body.distance
            minDistance: defaultMinDistance,
            query: {}, // additional query
            spherical: true, // use spherical model
            distanceMultiplier: 0.001 // convert distance unit
        }
    }
    
    const hospitals = await Hospital.aggregate([query,{
        $sort: {
            // ascending order of distance
            distance: 1 
        }
    }]).then(hospitals =>{
        return Hospital.populate(hospitals, {path: 'doctors', select: '-email -password'})
        // need doctors details
        // can limit the fields later
    })

    res.status(200).json(hospitals)
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
        const hospital = await Hospital.create({
            "facility_name": req.body.facility_name,
            "address": req.body.address,
            "location":{
                "type": "Point",
                "coordinates": [req.body.longitude, req.body.latitude]
            },
        });
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
    getNearestHospital,
    getHospital,
    createHospital,
    deleteHospital,
    updateHospital
}
