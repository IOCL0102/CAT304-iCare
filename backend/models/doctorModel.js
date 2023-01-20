const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const signup = require('../auth/signup')
const login = require('../auth/login')

// import subdoc schema
const timeslotSchema = require('./timeslotSubdoc');
const treatmentSchema = require('./treatmentSubdoc');

const doctorSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: "doctor"
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
    hospital: {
        type: String,
        required: true,
        default: " "
    }, // single hospital ID
    working_experience: {
        type: Number,
        required: true,
        default: 0
    },
    treatment: {
        type: [treatmentSchema],
        required: false,
        default: []
    }, // array of treatment (subdocument schema) 
    // in react - better to create a new component for each treatment input
    // when post/patch request, this field should include all treatments with the modify one (pass as an array is easier instead of add element in array or change element in array) - for React data processing
    default_availability: {
        type: [timeslotSchema],
        required: false,
        default: []
    }, // array of timeslot(subdocument schema)
    // when post/patch request, this field should include all timeslots with the modify one (pass as an array is easier instead of add element in array or change element in array)  - for React data processing
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
    schema_ver: {
        type: Number,
        required: true,
        default: 3.0
    }
    // 2.0: 
    //  - add photo field to store photo URL
    //  - change treatment field to array of treatment subdoc
    //  - change default_availability field to array of timeslot subdoc
    //  - add requests field to store request id
    //  - add appointments field to store appointment id
    // 3.0: 
    //  - add default value for fields other than email and password
    //  - set email as unique field
    //  - set type = 'doctor' for conditional routing
    //  - rearrange fields
}, { timestamps: true });

// static methods
doctorSchema.statics.signup = signup
doctorSchema.statics.login = login

module.exports = mongoose.model('Doctor', doctorSchema);