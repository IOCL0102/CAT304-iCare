const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// GET all patients
router.get('/', patientController.getPatients);

// GET single patient
router.get('/:id', patientController.getPatient);

// POST a new patient
router.post('/', patientController.createPatient);

// DELETE a new patient
router.delete('/:id', patientController.deletePatient);

// POST a new patient
router.patch('/:id', patientController.updatePatient);

module.exports = router;