const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// medicine schema
const medicineSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    intake_per_day: {
        type: Number,
        required: true,
    }, // number of times per day
    meal_period: {
        type: String,
        required: true,
    }, // value: before meal, after meal, no matter
    duration_in_days: {
        type: Number,
        required: true,
    }, // number of days, can be used for generate notifications collection
    schema_ver: {
        type: Number,
        required: true,
        default: 1.0
    }
    // how to automatic set different reminder time for morning/afternoon/night?
    // do it in workflows or in frontend or in backend?
});

const appointmentSchema = new Schema({
    datetime: {
        type: Date,
        required: true
    }, // yyyy-mm-ddThh:mm:ss 
    // find ways to generate automatically from accepting requst
    title: {
        type: String,
        required: true,
        default: "Monthly Checkup"
    }, 
    observation: {
        type: String,
        required: true,
    },
    treatment: {
        type: String,
        required: true,
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
    // or just find the latest appointment in front end
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
        default: 1.0
    }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);