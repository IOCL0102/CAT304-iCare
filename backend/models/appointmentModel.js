const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import subdoc schema
const medicineSchema = require('./medicineSubdoc');

const appointmentSchema = new Schema({
    start_datetime: {
        type: Date,
        required: true,
        default: Date.now()
    }, // yyyy-mm-ddThh:mm:ss : now
    end_datetime: {
        type: Date,
        required: true,
        default: new Date(Date.now() + (60 * 60 * 1000))
    }, // yyyy-mm-ddThh:mm:ss : now + 1 hr in milliseconds
    // Defaults for start_datetime & end_time deals assumption for adding medical records for walked-in patients
    title: {
        type: String,
        required: true,
        default: "Normal Doctor Appointment"
        // If got extra time, can set type of appointments, and populate data from there
    }, 
    observation: {
        type: String,
        required: true,
        default: " "
    },
    treatment: {
        type: String,
        required: true,
        default: " "
    },
    prescription: {
        type: [medicineSchema],
        required: true, 
        default: [] // not every appointment has prescription
    }, // an array of medicine objects
    // when post/patch request, this field should include all medicines with the modify one (pass as an array is easier instead of add element in array or change element in array)  - for React data processing    
    patient_id: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctor_id: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    request_id: {
        type: Schema.Types.ObjectId,
        ref: "Request",
        required: false 
        // some appointment document can directly store on-site visit medical record
    },
    schema_ver: {
        type: Number,
        required: true,
        default: 5.0
    }
    // 2.0:
    //  - replace datetime field with start_datetime and end_datetime for calendar display usage
    // 3.0:
    //  - add default for start_datetime & end_time
    //  - change prescription to required: true and add default: [] for easier front end data handling
    //  - remove last_checked field, should store in patients doc instead
    //  - add default for request_id
    // 4.0:
    //  - add default for observation and treatment
    // 5.0:
    //  - change default values for 'title' from 'Monthly Checkup'
    //  - change patient_id, doctor_id, request_id to object_id type for better query result through .populate()
}, { timestamps: true });

// static methods
appointmentSchema.statics.acceptRequest = async function(request) {
    // later solve timezone - time inaccurate issues
    // UTC is stored in mongoDB, need conversion before insert and after fetch

    // store start_datetime from date and time_slot.start_time
    let start_datetime = new Date(request.date)
    start_datetime.setHours(request.time_slot.start_time)
    // store end_datetime from date and time_slot.end_time
    let end_datetime = new Date(request.date)
    end_datetime.setHours(request.time_slot.end_time)
    // pass patient_id, doctor_id, request_id  
    const patient_id = request.patient_id
    const doctor_id = request.doctor_id
    const request_id = request._id

    const appointment = await this.create({start_datetime, end_datetime, patient_id, doctor_id, request_id})

    // cannot insert $push appointment id to patients or doctors here as it cause patients to have circular dependency

    if(appointment){
        return appointment
    }else{
        throw Error("Unable to create appointment from accepted request")
    }

}

module.exports = mongoose.model('Appointment', appointmentSchema);