const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "Remember to take your medicine!"
    }, 
    description: {
        type: String,
        required: true,
    }, // later check how to automate population of this field based on medicine intake 
    is_read: {
        type: Boolean,
        required: true,
        default: false
    },
    time_sent: {
        type: Date,
        required: true,
    }, // yyyy-mm-ddThh:mm:ss where it records the send time
    // or should set the time like 9am/11am/6pm
    medicine: {
        type: String,
        required: true
    }, // single medicine id
    patient: {
        type: String,
        required: true
    }, // single patient id
    // see if need to use DBref
    schema_ver: {
        type: Number,
        required: true,
        default: 1.0
    }
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);