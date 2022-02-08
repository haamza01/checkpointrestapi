const mongoose=require('mongoose');
const ContactSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:{type:String, unique:true,Required: true}

});
 
module.exports=mongoose.model('Contact', ContactSchema)