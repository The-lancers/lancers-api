// import the model
const {Register, registers} = require('../Models/Register');
const  RegisterModel = require('../Models/register.model');

const fetchAllRegisters = async () => {
    let response 
    try  {
        response = await RegisterModel.find();
        return { data: response }
    } catch(error) {
        return error;
    }
    // RegisterModel.find()
    // .then(cb, err)  // promise has been resolved
    // .catch() // while trying to resolve a promise an error happened and the promise was rejected
    
}

const createRegister = async (register) => {
    // use mongodb to create a new object
    const {full_name,email,password,location,gender} = register;
    let registerData = new RegisterModel({full_name,email,password,location,gender})
    return await registerData.save()
}

const fetchRegister = async (id) => {
    // retrieve a single item
    let register;
    try {
        register  = await RegisterModel.findById({_id:id})
        if(!register) return {message: "register does not exist"}
        return register
    }
    catch (error) {
        return error
    }
}

const updateRegister = async (_id, message) => {
     // retrieve a single item and update it
     try {
         await RegisterModel.findByIdAndUpdate(_id, { message }).exec()
         return {message: "Register updated succesfully"}
     }
     catch (error) {
         return error
     }
}

const deleteRegister = async (_id) => {
    try {
        await RegisterModel.findByIdAndDelete(_id).exec()
        return {message: "Register removed succesfully"}
    }
    catch (error) {
        return error
    }
}
module.exports = {
    fetchAllRegisters,
    createRegister,
    fetchRegister,
    updateRegister,
    deleteRegister
}