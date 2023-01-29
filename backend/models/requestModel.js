const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import subdoc schema
const timeslotSchema = require('./timeslotSubdoc');

const requestSchema = new Schema({
    date: {
        type: Date,
        required: true
    }, // yyyy-mm-dd only
    time_slot: {
        type: timeslotSchema,
        required: true
    }, // embeded timeslot object
    description: {
        type: String,
        required: true,
        default: "Patient didn't provide any description."
    },
    status: {
        type: String,
        required: true,
        default: "Pending"
    }, // value: Pending, Accepted, Rejected
    doctor_id: {
        type: Schema.Types.ObjectId,
        ref: "Doctor", // refer to Doctor schema model
        required: true
    },
    patient_id: {
        type: Schema.Types.ObjectId,
        ref: "Patient", // refer to Patient schema model
        required: true
    },
    schema_ver: {
        type: Number,
        required: true,
        default: 4.0
    }
    // 2.0: replace time_slot field with single timeslot subdoc
    // 3.0: change doctor > doctor_id and patient > patient_id
    // 4.0:
    //  - change patient_id & doctor_id to object_id type for better query result through .populate()
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);