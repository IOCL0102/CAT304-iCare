const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeslotSchema = new Schema({
    // time are in 24 hour format
    start_time: {
        type: Number,
        required: true,
        default: 8.00
    },
    end_time: {
        type: Number,
        required: true,
        default: 23.00
    },
    schema_ver: {
        type: Number,
        required: true,
        default: 2.0
    }
    // 2.0: add timestamps
}, { timestamps: true });

module.exports = timeslotSchema;