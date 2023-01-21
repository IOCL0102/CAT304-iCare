const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import subdoc schema
const medicineSchema = require('./medicineSubdoc');

const appointmentSchema = new Schema({
    start_datetime: {
        type: Date,
        required: true,
        default: Date.now
    }, // yyyy-mm-ddThh:mm:ss : now
    end_datetime: {
        type: Date,
        required: true,
        default: Date(Date.now + (60 * 60 * 1000))
    }, // yyyy-mm-ddThh:mm:ss : now + 1 hr in milliseconds
    // Defaults for start_datetime & end_time deals assumption for adding medical records for walked-in patients
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
        required: true, 
        default: [] // not every appointment has prescription
    }, // an array of medicine objects
    // when post/patch request, this field should include all medicines with the modify one (pass as an array is easier instead of add element in array or change element in array)  - for React data processing    
    patient_id: {
        type: String,
        required: true
    },
    doctor_id: {
        type: String,
        required: true
    },
    request_id: {
        type: String,
        required: true,
        default: " " // some appointment document can directly store on-site visit medical record
    },
    // see if need to use DBref
    schema_ver: {
        type: Number,
        required: true,
        default: 3.0
    }
    // 2.0:
    //  - replace datetime field with start_datetime and end_datetime for calendar display usage
    // 3.0:
    //  - add default for start_datetime & end_time
    //  - change prescription to required: true and add default: [] for easier front end data handling
    //  - remove last_checked field, should store in patients doc instead
    //  - add default for request_id
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);