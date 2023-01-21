const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lastcheckedSchema = new Schema({
    // frequently accessed fields from appointments
    appointment_id:{
        type: String,
        required: true,
        default: "None"
    }, // Use "None" for checking if there is previous appointments in the front end
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
        type: String,
        required: true,
        default: " "
    },
    schema_ver: {
        type: Number,
        required: true,
        default: 1.0
    }
}, { timestamps: true });

module.exports = lastcheckedSchema;