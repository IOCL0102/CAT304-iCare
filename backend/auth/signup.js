const bcrypt = require('bcrypt')
const validator = require('validator')

const signup = async function(email, password){

    // validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error('Email not valid')
    }

    // Strong criteria: minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 (based in validator documentation)
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    // 'this' only usable in function() instead of arrow function
    // search if email exist in collection
    const exists = await this.findOne({email})

    // if email exist, the user should login hence output error
    if (exists) {
        throw Error('Email already in use')
    }

    // generate salt to add certain random string behind the password to avoid pattern matching even if there are same passwords among the users
    // eg. abc1234iwe34i23fe & abc1234i34ew3fe43
    const salt = await bcrypt.genSalt(10)

    // hash the password and to be stored in DB later
    const hash = await bcrypt.hash(password, salt)

    // create document for the user, either Patient or Doctor
    const user = await this.create({email, password: hash})

    return user
}

module.exports = signup