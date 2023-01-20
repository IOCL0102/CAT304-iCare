const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import subdoc schema
const timeslotSchema = require('./timeslotSubdoc');

const requestSchema = new Schema({
    date: {
        type: Date,
        required: true
    }, // yyyy-mm-dd only
    time_slot: {
        type: timeslotSchema,
        required: true
    }, // embeded timeslot object
    description: {
        type: String,
        required: true,
        default: "Patient didn't provide any description."
    },
    status: {
        type: String,
        required: true,
        default: "Pending"
    }, // value: Pending, Accepted, Rejected
    doctor: {
        type: String,
        required: true
    }, // single doctor id
    patient: {
        type: String,
        required: true
    }, // single patient id
    // see if need to use DBref
    schema_ver: {
        type: Number,
        required: true,
        default: 2.0
    }
    // 2.0: replace time_slot field with single timeslot subdoc
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);