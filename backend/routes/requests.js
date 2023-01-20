const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');

// GET all requests
router.get('/', requestController.getRequests);

// GET single request
router.get('/:id', requestController.getRequest);

// POST a new request
router.post('/', requestController.createRequest);

// DELETE a new request
router.delete('/:id', requestController.deleteRequest);

// POST a new request
router.patch('/:id', requestController.updateRequest);

module.exports = router;