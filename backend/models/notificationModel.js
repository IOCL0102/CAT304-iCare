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
    time_read: {
        type: Date,
        required: false,
    }, // yyyy-mm-ddThh:mm:ss where it records the read time
    // Need to add controller, when added, this is changed
    medicine_id: {
        type: Schema.Types.ObjectId,
        ref: "medicineSchema", // refer to medicineSchema subdocument
        required: true
    },
    patient_id: {
        type: Schema.Types.ObjectId,
        ref: "Patient", // refer to Patient schema model
        required: true
    },
    // see if need to use DBref
    schema_ver: {
        type: Number,
        required: true,
        default: 3.0
    }
    // 2.0: change medicine > medicine_id and patient > patient_id
    // 3.0:
    //  - add 'time_read' to record the time when user check the notification
    //  - change medicine_id & patient_id to object_id type for better query result through .populate()
    //  - strict is set to false as time_read is only added once the notification isRead is set is 'true', need to set this to bypass mongoose strict query
}, { strict: false, timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);