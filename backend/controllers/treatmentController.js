const mongoose = require('mongoose');
const Doctor = require('../models/doctorModel');

// get all treatments
const getTreatments = async (req, res) => {
    // currently sort by name in ascending order
    const doctors = await Doctor.find({}, 'name treatment hospital_id schema_ver createdAt updatedAt').populate({
        path: 'hospital_id', 
        select: 'facility_name address'}).sort({name: 1});

    let finalTreatmentsList = []
    const treatments = doctors.map(result => {
        // convert mongoose object to json object first
        const result_json = result.toObject()

        // extract treatment lists
        let treatmentslist = result_json.treatment
        
        treatmentslist.forEach((treatment) => {
            treatment['hospital_name'] = result.hospital_id.facility_name
            treatment['hospital_address'] = result.hospital_id.address
        })
        
        finalTreatmentsList = finalTreatmentsList.concat(treatmentslist)
    })

    res.status(200).json(finalTreatmentsList);
}

module.exports = { getTreatments }