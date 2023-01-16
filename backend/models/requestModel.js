const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// timeslot schema
const timeslotSchema = new Schema({
    start_time: {
        type: Number,
        required: true,
        default: 8.00
    },
    end_time: {
        type: Number,
        required: true,
        default: 23.00
    }
    // add schema version for later
    // time are in 24 hour format
});

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
        default: 1.0
    }
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);