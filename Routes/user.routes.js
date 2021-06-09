const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userController = require('../Controllers/user.controller');


router.post('/signup', async(req, res) => {
    const {full_name, username,email,password} = req.body
    const encrypted = await bcrypt.hash(password, 10)
    let response =  await userController.registerUser({full_name,username,email, password:encrypted })
    if(response.error) return res.status(400).json(response.error)
    return res.status(201).json(response)
    
   
   
})

router.post('/login', async(req, res) => {
    // process login from here
    const {email, password} = req.body
    let response =  await userController.loginUser({email, password })
    if(response.error) {
        return res.status(400).json({error: response.error})
    }
    else {
      return res.status(200).json(response)
    }
})
module.exports = router;