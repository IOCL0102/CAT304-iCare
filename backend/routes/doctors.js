const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// GET all doctors
router.get('/', doctorController.getDoctors);

// GET single doctor
router.get('/:id', doctorController.getDoctor);

// POST a new doctor
router.post('/', doctorController.createDoctor);

// DELETE a new doctor
router.delete('/:id', doctorController.deleteDoctor);

// POST a new doctor
router.patch('/:id', doctorController.updateDoctor);

module.exports = router;