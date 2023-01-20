const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import subdoc schema
const medicineSchema = require('./medicineSubdoc');

const appointmentSchema = new Schema({
    // find ways to generate start & end automatically from accepting requst
    start_datetime: {
        type: Date,
        required: true
    }, // yyyy-mm-ddThh:mm:ss 
    end_datetime: {
        type: Date,
        required: true
    }, // yyyy-mm-ddThh:mm:ss 
    title: {
        type: String,
        required: true,
        default: "Monthly Checkup"
    }, 
    observation: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    prescription: {
        type: [medicineSchema],
        required: false, // not every appointment has prescription
    }, // an array of medicine objects
    // in react - better to create a new component for each medicine input
    last_checked: {
        type: String,
        required: false,
        default: ""
    }, // single appointment id
    // auto populate when there is latest appointment when appointment > 0
    patient: {
        type: String,
        required: true
    }, // single patient id
    doctor: {
        type: String,
        required: true
    }, // single doctor id
    request: {
        type: String,
        required: true
    }, // single request id
    // see if need to use DBref
    schema_ver: {
        type: Number,
        required: true,
        default: 2.0
    }
    // 2.0:
    //  - replace datetime field with start_datetime and end_datetime for calendar display usage
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);