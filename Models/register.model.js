const mongoose = require ('mongoose');
const bycryptjs = require('bycryptjs')

// Schema definition
const registerSchema =new mongoose.Schema({
    UserName:{
        type: String,
        required: "Please enter ur username"
    },
    EmailAddress:{
        type:String,
        required: "Please enter your email"
    },
    Password:{
        type:String,
        required:"Password is required"
    },

});

registerSchema.add({
    UserName:{
        type:String, unique:true, 
        required:'Please enter another  usernametaken'
    } 
});

// pre-save (applies to the password, especially confirm password)  bycrypt
registerSchema.pre('save', function(next){
    this.Password = bycryptjs.hashSync(this.Password, 10);
    next()
})
// hashing is the process of encryption


// Authenticate
registerSchema.static.authenticate = async function(UserName, Password){
    const User = await this.findOne({UserName})
    if(!User){
        throw new Error("user not found")
    }
    const match = await bycryptjs.compare(Password, User.Password)
    if(match){
        return User;
    }
}


module.exports = mongoose.model("Register", registerSchema)