// handles user sign up & log in details using either Doctor and Patient model directly
// the reason to keep user model separated is due to the better utilisation of the object id for each Doctor or Patient document
const Doctor = require('../models/doctorModel');
const Hospital = require('../models/hospitalModel')
const Patient = require('../models/patientModel');
const createToken = require('../auth/createToken')

// login 
const login = async (req, res) => {
    
    const {email, password, type} = req.body

    // validate the type first
    // type - doctor, patient
    // email and password is validate inside Model.static.login

    try{
        let user
        switch(type){
            case 'doctor':
                user = await Doctor.login(email, password)
                break;
            case 'patient':
                user = await Patient.login(email, password)
                break;
            default:
                throw Error(`Invalild type: ${type}`)
        }

        // when user login, a json web token is automatically generated to the user
        // create a token
        // _id & type as the payload for access by backend 
        const token = createToken(user._id, user.type)

        // store type for better routing controls
        res.status(200).json({email, type, token}) 
    }catch (error){
        res.status(400).json({error: error.message})
    }

    
}

const signup = async(req, res) => {
    
    const {email, password, type} = req.body

    // validate the type first
    // type - doctor, patient
    // email and password is validate inside Model.static.signup

    try{
        let user
        switch(type){
            case 'doctor':
                user = await Doctor.signup(email, password)
                break;
            case 'patient':
                user = await Patient.signup(email, password)
                break;
            default:
                throw Error(`Invalild type: ${type}`)
        }

        // when user sign up, a json web token is automatically generated to the user as the user stayed signed in after signup
        // create a token
        // _id & type as the payload for access by backend 
        const token = createToken(user._id, user.type)

        // store type for better routing controls
        res.status(200).json({email, type, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// get a profile
const getProfile = async(req, res) => {
    let user
    switch(req.user.type){
        case 'doctor':
            user = await Doctor.findById(req.user._id).populate('hospital_id').exec()
            // need to access hospital detail too
            // can further limit the fields in populated hospital_id
            break;
        case 'patient':
            user = await Patient.findById(req.user._id)
            break;
        default:
            throw Error(`Invalild type: ${req.user.type}`)
    }

    if(!user){
        return res.status(404).json({error: 'No such profile'});
    }

    res.status(200).json(user);
}

// update a profile
const updateProfile = async(req, res) => {

    let user
    switch(req.user.type){
        case 'doctor':
            user = await Doctor.findOneAndUpdate({_id: req.user._id},{...req.body}) 
            // use findOneAndUpdate to fetch the data of the document
            // Trigger
            // doctor only return previous document data, check if previous update don't have  hospital_id add to hospital's doctor list
            if(user.hospital_id == undefined){
                // update hospital's doctors array for 2 way referencing
                try{
                    const hospital = await Hospital.updateOne(
                        {_id: req.body.hospital_id}, // need to fetch from req.body for the hospital_id as the returned doctor json don't have the property
                        {$push: {
                            "doctors": user._id
                        }}
                    ); // confirm hospital exists when updating doctor profile hence no need to check if hospital exists

                }catch(error){
                    console.log({error: error.message});
                }
            }
            break;
        case 'patient':
            user = await Patient.findOneAndUpdate({_id: req.user._id},{...req.body})
            break;
        default:
            throw Error(`Invalild type: ${req.user.type}`)
    }

    res.status(200).json(user)
}

module.exports = {
    login,
    signup,
    getProfile,
    updateProfile
}