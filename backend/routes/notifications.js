const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// GET all notifications
router.get('/', notificationController.getNotifications);

// GET single notification
router.get('/:id', notificationController.getNotification);

// POST a new notification
router.post('/', notificationController.createNotification);

// DELETE a new notification
router.delete('/:id', notificationController.deleteNotification);

// POST a new notification
router.patch('/:id', notificationController.updateNotification);

module.exports = router;