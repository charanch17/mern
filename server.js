const express = require("express")

const {connectdb} = require("./config/db")

const app = express()

connectdb()

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT} `)
})

app.get("/",(req,res)=>{
    res.send("successfull")

})
