const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const signup = require('../auth/signup')
const login = require('../auth/login')
const Doctor = require('./doctorModel')
const Appointment = require('./appointmentModel')

// import subdoc schema
const lastcheckedSchema = require('./lastcheckedSubdoc')

const patientSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true,
        default: "patient"
    },
    photo:{
        type: String, // change to buffer if manage to integrate multer to upload image
        required: true,
        default: "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
    },
    name: {
        type: String,
        required: true, 
        default: " "
    },
    phone_number: {
        type: String,
        required: true, 
        default: " "
    },
    gender: {
        type: String,
        required: true,
        default: " "
    },
    age: {
        type: Number,
        required: true,
        default: 0
    },
    birth_date: {
        type: Date,
        required: true, 
        default: Date.now
    },
    address: {
        type: String,
        required: true,
        default: " "
    },
    latitude: {
        type: Number,
        required: true,
        default: 0
    },
    longitude: {
        type: Number,
        required: true, 
        default: 0
    }, // check if need to convert to [latitude, longitude] format for MongoDB
    // in react, use Google Map API to get latitude and longitude from address
    ic_number: {
        type: String,
        required: true, 
        default: " "
    },
    weight: {
        type: Number,
        required: true, 
        default: 0
    }, // in kg
    height: {
        type: Number,
        required: true,
        default: 0
    }, // in cm
    blood_type: {
        type: String,
        required: true, 
        default: " "
    }, // added in
    allergies: {
        type: String,
        required: true,
        default: "None"
    },
    last_checked:{
        type: lastcheckedSchema,
        required: true,
        default: {} 
    }, 
    // auto populate when there is latest appointment when appointment > 0
    requests: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Request" // refer to Request schema model
        }],
        required: true,
        default: []
    }, // array of request object id from requests
    appointments: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Appointment" // refer to Appointment schema model
        }],
        required: true,
        default: []
    }, // array of appointment object id from appointments
    notifications: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Notification" // refer to Notification schema model
        }],
        required: true,
        default: []
    }, // array of notification object id from notifications
    schema_ver: {
        type: Number,
        required: true,
        default: 6.0
    }
    // 2.0: 
    //  - change medical_history to array of appointment id from appointment (String)
    //  - add requests, appointments and notifications field for reference
    // 3.0: remove medical_history field
    // 4.0: 
    //  - add defaults for field other than email and password
    //  - set email as unique field
    //  - add type field for better conditional routing
    // 5.0: 
    //  - rearrange fields for email, password, types
    //  - add last_checked (subdoc with frequently accessed fields)
    // 6.0:
    //  - change requests, appointments and notifications to [object_id] type for better query result through .populate() and required as true as need to insert later 
}, { timestamps: true });

// static methods
patientSchema.statics.signup = signup
patientSchema.statics.login = login
patientSchema.statics.updateLastChecked = async function(patient_id) {
    // if > 0 appointment, then update the patient last checked field with the latest one in the existing collection
    // eg: if currently have 1 appointment, add 1 new appointment will set the latest appointment in the collection as the previous appointment (before creating new doc)

    // count available appointments by the single patient
    const count =  await Appointment.countDocuments({patient_id: patient_id})
    console.log(count)
    
    if(count > 0){
        // fetch the latest appointments (previous one)
        const appointment = await Appointment.findOne({patient_id: patient_id}).sort({createdAt: -1})

        // store the fields for lastcheckedSubdoc
        const appointment_id = appointment._id
        const observation = appointment.observation
        const treatment = appointment.treatment
        const prescription = appointment.prescription // only createdAt & updatedAt unable to copy from original
        // only fetch doctor_name from doctor doc
        const doctor = await Doctor.findById(appointment.doctor_id, 'name')
        const doctor_name = doctor.name
        // only need date information
        const date = new Date(appointment.start_datetime)

        // update last_checked field for the patient doc
        const patient = await this.updateOne({_id: patient_id},{last_checked: { appointment_id, observation, treatment, prescription, doctor_name, date}})
     
        return patient // return update message
    }else{
        return Error("Patient do not have any previous appointment")
    }
}

module.exports = mongoose.model('Patient', patientSchema);