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
    }, // check if need to convert to [latitude, longitude] format for MongoDB
    doctors:{
        type: [String],
        required: false,
        default: []
    }, // array of doctor IDs
    schema_ver: {
        type: Number,
        required: true,
        default: 3.0
        // 2.0: add doctors field to store doctor IDs
        // 3.0: 
        //  - specify data type for doctors array field, Array > [String]
        //  - improve doctors field: required = false & default = []
    }
}, { timestamps: true });

module.exports = mongoose.model('Hospital', hospitalSchema);