const mongoose =require("mongoose")
const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const Userlogin =mongoose.model("Userlogin",userSchema)
module.exports=Userlogin