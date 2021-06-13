const UserModel = require('../Models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const registerUser = async (data) => {

    const {username} = data;
    // check for existance
    const userExists = await UserModel.findOne({username})
    if(userExists) return {error : 'User with this username already exists'}
    
    const newUser = new UserModel(data);
    try{
        await newUser.save();
        return {message: "User registed successfully"}
    } catch(error) {
        throw new Error(error) 
    }
}

const loginUser = async (userData) => {
    const {email, password} = userData
    try {
    const user = await UserModel.findOne({email})
    if(user) {
        // perform login
        // let hashedPassword = await bcrypt.hash(password)
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(isPasswordValid) {
            // generate token
            const {SECRET_KEY} = process.env
            let token = await jwt.sign({email: user.email}, SECRET_KEY, {
                expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
            })
            return {message: "successfully loggedin", token}
        } else {
            return {error: "Invalid email/ password"}
        }

    } else {
        return {error: 'User not found'}
    }
 } catch(error) { 
     console.log('*** ',error)
        return {error}
    }
}

module.exports = {
    registerUser,
    loginUser
}