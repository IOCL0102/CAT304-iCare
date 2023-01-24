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
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Doctor", // refer to Doctor schema model
        }],
        required: true,
        default: []
    }, // array of doctor IDs
    schema_ver: {
        type: Number,
        required: true,
        default: 4.0
        // 2.0: add doctors field to store doctor IDs
        // 3.0: 
        //  - specify data type for doctors array field, Array > [String]
        //  - improve doctors field: required = false & default = []
        // 4.0:
        //  - change doctors to [object_id] type for better query result through .populate() and required as true as need to insert later
    }
}, { timestamps: true });

module.exports = mongoose.model('Hospital', hospitalSchema);