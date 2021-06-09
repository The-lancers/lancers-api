const mongoose = require ('mongoose');
const bycryptjs = require('bycryptjs')

// Schema definition
const registerSchema =new mongoose.Schema({
    full_name:{
        type: String,
        required: "Please enter ur username"
    },

    username:{
        type: String,
        required: "Please enter ur username"
    },
    email:{
        type:String,
        required: "Please enter your email"
    },
    password:{
        type:String,
        required:"Password is required"
    },

});

registerSchema.add({
    username:{
        type:String, unique:true, 
        required:'Please enter another  usernametaken'
    } 
});

// pre-save (applies to the password, especially confirm password)  bycrypt
registerSchema.pre('save', function(next){
    this.Password = bycryptjs.hashSync(this.password, 10);
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