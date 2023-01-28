const express = require('express');
const router = express.Router();
const { getTreatments } = require('../controllers/treatmentController');

// GET all treatments
router.get('/', getTreatments)

module.exports = router