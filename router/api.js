const userdata = require('../models/userdata')

const router=require('express').Router()



router.post('/reg',(req,res)=>{
    const{name,email,phonenumber}=req.body
    const record=new userdata({name:name,email:email,phone:phonenumber})
    //await record.save()
    //res.json(record)
    console.log(record)
})