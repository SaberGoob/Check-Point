const express = require('express')
const app=express()

require('dotenv').config({path:"./config/.env"})
const PORT=process.env.PORT


const connectDB = require("./config/DB_Connect")
connectDB()

app.use(express.json())
app.use("/user",require("./routes/userRoute"))





app.listen(PORT,(err)=>
err ? console.log(err) : console.log(`server is runnig ${PORT}`))