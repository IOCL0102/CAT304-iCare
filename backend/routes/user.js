const express = require('express')
const { login, signup } = require('../controllers/userController')

const router = express.Router()

// login 
router.post('/login', login)

// sign up
router.post('/signup', signup)

module.exports = router