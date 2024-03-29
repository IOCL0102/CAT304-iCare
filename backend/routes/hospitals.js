const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');

// GET all hospitals
router.get('/', hospitalController.getHospitals);

// GET single hospital
router.get('/:id', hospitalController.getHospital);

// POST to fetch nearest hospitals (submit longitude and latitude, and distance data)
router.post('/bynearest', hospitalController.getNearestHospital)

// POST a new hospital
router.post('/', hospitalController.createHospital);

// DELETE a new hospital
router.delete('/:id', hospitalController.deleteHospital);

// POST a new hospital
router.patch('/:id', hospitalController.updateHospital);

module.exports = router;