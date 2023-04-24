if(process.env.NODE_ENV !=="production"){
    require("dotenv").config()
    console.log(process.env.DATABASE_URL)
}

const express = require("express")
const app = express()
const mongoose =  require("mongoose")
const expressLayout = require("express-ejs-layouts")
const indexRouter = require("./routes/index")
const User = require("./models/User")

app.set("view engine", "ejs")
app.set("views", __dirname +"/views")
app.set("layout", "layouts/layout")

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on("error", ()=> {throw new Error("failed connection")})
db.once("open", ()=>{console.log("mongoose conncetion successful")})

app.use(expressLayout)
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use("/", indexRouter)
//app.use("User",userSchema)

app.listen(process.env.PORT || 3000)