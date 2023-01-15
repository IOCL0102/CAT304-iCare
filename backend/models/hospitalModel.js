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
    schema_ver: {
        type: Number,
        required: true,
        default: 1.0
    }
}, { timestamps: true });

module.exports = mongoose.model('Hospital', hospitalSchema);