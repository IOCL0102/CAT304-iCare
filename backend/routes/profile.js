const express = require('express')
const { getProfile, updateProfile } = require('../controllers/userController')
const Doctor = require('../models/doctorModel')
const Patient = require('../models/patientModel')

// put into separate files as this require Auth validation

const router = express.Router()

// get the profile
router.get('/', getProfile);

// update the profile
router.patch('/', updateProfile);

module.exports = router