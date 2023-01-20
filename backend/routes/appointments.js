const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// GET all appointments
router.get('/', appointmentController.getAppointments);

// GET single appointment
router.get('/:id', appointmentController.getAppointment);

// POST a new appointment
router.post('/', appointmentController.createAppointment);

// DELETE a new appointment
router.delete('/:id', appointmentController.deleteAppointment);

// POST a new appointment
router.patch('/:id', appointmentController.updateAppointment);

module.exports = router;