const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    status:{type:String,default:'active'}
})
module.exports=mongoose.model('userdata',userSchema)