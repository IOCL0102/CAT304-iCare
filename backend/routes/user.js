const express = require('express')
const { login, signup } = require('../controllers/userController')

const router = express.Router()

// The front end should include 'type' other than email and password in the fetch()

// login 
router.post('/login', login)

// sign up
router.post('/signup', signup)


module.exports = router