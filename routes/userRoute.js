const express = require("express")
const userRoute=express.Router()

const User=require('../models/usertModel')
//add new user
userRoute.post("/add",async(req,res)=>{
const newUser=new User(req.body)
const result=await newUser.save()
res.send(result)
}
)
//Get all Users
userRoute.get('/',async(req,res)=>{
    try{
const result=await User.find()
res.send({users:result,msg:"get users"})
} catch(error){
    console.log(error)
}
})


//Get User By ID
userRoute.get('/:id',async(req,res)=>{
    try{
const result=await User.find({_id:req.params.id})
res.send({users:result,msg:"get users by id"})
} catch(error){
    console.log(error)
}
})

//Update user
userRoute.put('/update/:id',async(req,res)=>{
    try{
const result=await User.findByIdAndUpdate({_id: req.params.id},{$set:req.body},{new:true})
res.send({users:result,msg:"User deleted"})
} catch(error){
    console.log(error)
}
})
//Delete User
userRoute.delete('/delete/:id',async(req,res)=>{
    try{
const result=await User.findByIdAndRemove({_id: req.params.id})
res.send({users:result,msg:"User deleted"})
} catch(error){
    console.log(error)
}
})


module.exports=userRoute