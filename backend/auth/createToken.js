const jwt = require('jsonwebtoken')

// _id & type is set as the payload of the token
const createToken = ((_id, type) => {
    
    // every token generated is different
    return jwt.sign({_id, type}, process.env.SECRET, { expiresIn: '3d'})
    // expiresIn = user logged in for how many days
})

module.exports = createToken