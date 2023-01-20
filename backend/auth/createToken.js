const jwt = require('jsonwebtoken')

// _id is set as the payload of the token
const createToken = ((_id) => {
    
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
    // expiresIn = user logged in for how many days
})

module.exports = createToken