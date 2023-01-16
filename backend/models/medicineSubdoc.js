const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// medicine schema
const medicineSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    intake_per_day: {
        type: Number,
        required: true,
    }, // number of times per day
    meal_period: {
        type: String,
        required: true,
    }, // value: before meal, after meal, no matter
    duration_in_days: {
        type: Number,
        required: true,
    }, // number of days, can be used for generate notifications collection
    schema_ver: {
        type: Number,
        required: true,
        default: 3.0
    }
    // 2.0: add notifications field to store notification ids
    // 3.0: remove notifications field as it is not needed to query all reminders based on medicine
    // how to automatic set different reminder time for morning/afternoon/night?
    // do it in workflows or in frontend or in backend?
}, { timestamps: true });

module.exports = medicineSchema;