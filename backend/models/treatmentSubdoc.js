const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// treatment schema
const treatmentSchema = new Schema({
    name: {
        type: String,
        required: true
    }, // treatment name instead of disease, ie: insulin injection
    fee: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: " "
    }, // should contain diseases name, ie: diabetes
    schema_ver: {
        type: Number,
        required: true,
        default: 2.0
        // 2.0:
        //  - Add default value for "description", and set as required
    }
}, { timestamps: true });

module.exports = treatmentSchema;