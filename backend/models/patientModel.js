const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const signup = require('../auth/signup')
const login = require('../auth/login')

// import subdoc schema
const lastcheckedSchema = require('./lastcheckedSubdoc')

const patientSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true,
        default: "patient"
    },
    photo:{
        type: String, // change to buffer if manage to integrate multer to upload image
        required: true,
        default: "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
    },
    name: {
        type: String,
        required: true, 
        default: " "
    },
    phone_number: {
        type: String,
        required: true, 
        default: " "
    },
    gender: {
        type: String,
        required: true,
        default: " "
    },
    age: {
        type: Number,
        required: true,
        default: 0
    },
    birth_date: {
        type: Date,
        required: true, 
        default: Date.now
    },
    address: {
        type: String,
        required: true,
        default: " "
    },
    latitude: {
        type: Number,
        required: true,
        default: 0
    },
    longitude: {
        type: Number,
        required: true, 
        default: 0
    }, // check if need to convert to [latitude, longitude] format for MongoDB
    // in react, use Google Map API to get latitude and longitude from address
    ic_number: {
        type: String,
        required: true, 
        default: " "
    },
    weight: {
        type: Number,
        required: true, 
        default: 0
    }, // in kg
    height: {
        type: Number,
        required: true,
        default: 0
    }, // in cm
    blood_type: {
        type: String,
        required: true, 
        default: " "
    }, // added in
    allergies: {
        type: String,
        required: true,
        default: "None"
    },
    last_checked:{
        type: lastcheckedSchema,
        required: true,
        default: {} 
    }, 
    // auto populate when there is latest appointment when appointment > 0
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
        default: 5.0
    }
    // 2.0: 
    //  - change medical_history to array of appointment id from appointment (String)
    //  - add requests, appointments and notifications field for reference
    // 3.0: remove medical_history field
    // 4.0: 
    //  - add defaults for field other than email and password
    //  - set email as unique field
    //  - add type field for better conditional routing
    // 5.0: 
    //  - rearrange fields for email, password, types
    //  - add last_checked (subdoc with frequently accessed fields)
}, { timestamps: true });

// static methods
patientSchema.statics.signup = signup
patientSchema.statics.login = login

module.exports = mongoose.model('Patient', patientSchema);