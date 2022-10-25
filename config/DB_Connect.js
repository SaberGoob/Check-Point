const mongoose= require('mongoose')
require("dotenv").config({path:'./.env'})
connectDB=()=>(
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("datebase connected"))
.catch(error=> console.log(error))
)
module.exports = connectDB
