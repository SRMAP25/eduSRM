const express=require("express")
const app=express()
app.use(express.json());
const path = require('path')
const User=require('./Models/User')
const { default: mongoose } = require("mongoose")

app.get('/api/:name',async(req,res)=>{
    const {name}=req.params 
    const data=await User.find({name:name})
    l=data.length
    res.status(200).json({length:l,data})
})
app.get('/api/',async(req,res)=>{ 
    const data=await User.find()
    res.status(200).json({length:data.length,data})
}) 
 
app.post('/api',(req,res)=>{
    const name=req.body.name
    User.create({
        "name":name,
    })
    res.status(200).json({msg:"post success"})
})

function connectDB(){
    mongoose.connect("mongodb://127.0.0.1:27017/Learn")
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log("DB Error",err))
}
 
app.listen(3000,()=>{
    console.log("Server Running at 3000")
    connectDB()
}) 