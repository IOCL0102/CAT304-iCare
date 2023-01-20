// handles user sign up & log in details using either Doctor and Patient model directly
// the reason to keep user model separated is due to the better utilisation of the object id for each Doctor or Patient document
const Doctor = require('../models/doctorModel');
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
        const token = createToken(user._id)

        // store type for better routing controls
        // dive in deeper first before adding _id, name inside the return data
        // see to store profiles at where first Auth context or other context
        res.status(200).json({email, type, token}) 
    }catch (error){
        res.status(400).json({error: error.message})
    }

    
}

const signup = async(req, res) => {
    // The front end should include 'type' in the fetch()
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
        const token = createToken(user._id)

        // store type for better routing controls
        // dive in deeper first before adding _id, name inside the return data
        // see to store profiles at where first Auth context or other context
        res.status(200).json({email, type, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    login,
    signup
}