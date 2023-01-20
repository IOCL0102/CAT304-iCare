const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// treatment schema
const treatmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    schema_ver: {
        type: Number,
        required: true,
        default: 1.0
    }
}, { timestamps: true });

module.exports = treatmentSchema;