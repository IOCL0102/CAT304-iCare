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
    location:{
        type:{
            type:String,
            default: "Point"
        },
        coordinates:{
            type: [Number],
            index: "2dsphere",
            required: true
        }
    },
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
        default: 5.0
        // 2.0: add doctors field to store doctor IDs
        // 3.0: 
        //  - specify data type for doctors array field, Array > [String]
        //  - improve doctors field: required = false & default = []
        // 4.0:
        //  - change doctors to [object_id] type for better query result through .populate() and required as true as need to insert later
        // 5.0:
        //  - change longitude and latitude to coordinates and added index for geospatial query
    }
}, { timestamps: true });

module.exports = mongoose.model('Hospital', hospitalSchema);