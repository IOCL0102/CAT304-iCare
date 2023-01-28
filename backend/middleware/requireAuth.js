const jwt = require('jsonwebtoken')
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');

const requireAuth = async (req, res, next) => {
    // verify user is authenticated
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    // Authorization header format is: 'Bearer fjiowefjewihfoewfiew'
    const token = authorization.split(' ')[1]
    
    
    try{
        // extract _id & type from token
        const { _id, type } = jwt.verify(token, process.env.SECRET)

        switch(type){
            case 'doctor':
                req.user = await Doctor.findOne({ _id }).select('_id type')
                break;
            case 'patient':
                req.user = await Patient.findOne({ _id }).select('_id type')
                break;
            default:
                throw Error(`Invalild type: ${type}`)
        }

        next() 
    }catch (error){
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports = requireAuth