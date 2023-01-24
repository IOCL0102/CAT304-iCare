const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import subdoc schema
const medicineSchema = require('./medicineSubdoc');

const lastcheckedSchema = new Schema({
    // frequently accessed fields from appointments
    appointment_id:{
        type: String,
        required: true,
        default: "None"
    }, // Use "None" for checking if there is previous appointments in the front end
    // no need set as object id as no need to populate data here
    doctor_name:{
        type: String,
        required: true,
        default: " "
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    observation: {
        type: String,
        required: true,
        default: " "
    },
    treatment: {
        type: String,
        required: true,
        default: " "
    },
    prescription: {
        type: [medicineSchema],
        required: true, 
        default: [] // not every appointment has prescription
    }, // an array of medicine objects
    // when post/patch request, this field should include all medicines with the modify one (pass as an array is easier instead of add element in array or change element in array)  - for React data processing    
    schema_ver: {
        type: Number,
        required: true,
        default: 2.0
    }
    // 2.0: 
    //  - replace prescription datatype to [medicineSchema]
}, { timestamps: true });

module.exports = lastcheckedSchema;