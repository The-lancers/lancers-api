const mongoose = require('mongoose');

// structure of our data to be stored
const RegisterSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password:String,
  gender:String,
  location:String
});

// const ReviewModel = mongoose.model('Review', ReviewSchema, 'reviews');

// module.exports =  ReviewModel;
module.exports = RegisterSchema;