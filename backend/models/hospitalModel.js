const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    facility_name: {
        type: String,
        required: true
    },
    address:{
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
    },
    doctors:{
        type: Array,
        required: true
    }, // array of doctor IDs
    // probably not required by default, especially for array data type
    schema_ver: {
        type: Number,
        required: true,
        default: 2.0
        // 2.0: add doctors field to store doctor IDs
    }
}, { timestamps: true });

module.exports = mongoose.model('Hospital', hospitalSchema);