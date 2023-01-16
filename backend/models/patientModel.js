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
    }, // check if need to convert to [latitude, longitude] format for MongoDB
    // in react, use Google Map API to get latitude and longitude from address
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
        type: [String],
        required: false,
        default: []
    }, // array of appointment id from appointment (String)
    // when post/patch request, this field should include all previous treatments with the modify one (pass as an array is easier instead of add element in array or change element in array) - for React data processing
    requests: {
        type: [String],
        required: false,
        default: []
    }, // array of request id from requests (String)
    appointments: {
        type: [String],
        required: false,
        default: []
    }, // array of appointment id from appointments (String)
    notifications: {
        type: [String],
        required: false,
        default: []
    }, // array of notification id from notification (String)
    schema_ver: {
        type: Number,
        required: true,
        default: 2.0
    }
    // 2.0: 
    //  - change medical_history to array of appointment id from appointment (String)
    //  - add requests, appointments and notifications field for reference
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);