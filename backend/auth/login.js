const bcrypt = require('bcrypt')

const login = async function(email, password) {

    // validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    // search for emails in the collection
    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect email')
    }

    // match the password with hashed passwords
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = login