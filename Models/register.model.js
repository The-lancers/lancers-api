const mongoose = require('mongoose');
const RegisterSchema = require('./register.schema');

const RegisterModel = mongoose.model('Register', RegisterSchema, 'registers');

module.exports = RegisterModel;
