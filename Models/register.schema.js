import mongoose from 'mongoose';

//extract tha class
const {Schema} =mongoose

//create a new instance for the above class
const RegisterSchema = new Schema({
    full_name: String,
    username: String,
    email:String,
    password:String
});
module.exports =RegisterSchema;
