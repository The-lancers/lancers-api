const UserSchema = require('./user.schema');
const mongoose = require('mongoose');

const UserModel = mongoose.model('User', UserSchema, 'users')

module.exports = UserModel;