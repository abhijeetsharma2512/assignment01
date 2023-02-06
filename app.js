const express=require('express')
const app=express()
app.use(express.json())
const Apirouter=require('./router/api')

const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/assignment01',()=>{
    console.log('connected to DB assignment01')
})
app.use('/api',Apirouter )
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})
