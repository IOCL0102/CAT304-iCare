const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // later add in photo field (file/url)
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
    type: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    working_experience: {
        type: Number,
        required: true
    },
    treatment: {
        type: Array,
        required: true
    }, // array of treatments (String) // later treatment  need to add fee and description
    // when post/patch request, this field should include all treatments with the modify one (pass as an array is easier instead of add element in array or change element in array) - for React data processing
    default_availability: {
        type: Array,
        required: true
    }, // array of timeslots (Object)
    // when post/patch request, this field should include all timeslots with the modify one (pass as an array is easier instead of add element in array or change element in array)  - for React data processing
    schema_ver: {
        type: Number,
        required: true,
        default: 1.0
    }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);