const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    photo:{
        type: String, // change to buffer if manage to integrate multer to upload image
        required: true,
        default: "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }, // in react, use Google Map API to get latitude and longitude from address
    ic_number: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }, // in kg
    height: {
        type: Number,
        required: true
    }, // in cm
    blood_type: {
        type: String,
        required: true
    }, // added in
    allergies: {
        type: String,
        required: true,
        default: "None"
    }, 
    medical_history: {
        type: Array,
        required: false
    }, // array of medical history from appointment (String) -  see if needed
    // when post/patch request, this field should include all previous treatments with the modify one (pass as an array is easier instead of add element in array or change element in array) - for React data processing
    // see if need to store an array of request appointment and notification sent for medical intake or use DBref, same apply to doctor
    schema_ver: {
        type: Number,
        required: true,
        default: 1.0
    }
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);