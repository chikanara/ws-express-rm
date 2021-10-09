const express = require("express")
const app = express()

const logger = (req,res,next) => {
     console.table({"url":req.url,"method":req.method})
     next()
}

app.use(logger)
app.use(express.static("public"))

app.get("/",(req,res) => {
    res.send("<h1 style='color:red'>Hello folks</h1>")
    console.log("url",req.url)
    console.log("method",req.method)
  
})

//serve css
// app.get("/css/style.css",(req,res) => {
//     res.sendFile(__dirname+"/public/css/style.css")
//     console.log("url",req.url)
//     console.log("method",req.method)
// })

// app.get("/home",(req,res) => {
//     res.sendFile(__dirname+"/public/index.html")
//     // console.log("url",req.url)
//     // console.log("method",req.method)
// })

// app.get("/products",(req,res) => {
//     res.sendFile(__dirname+"/public/products.html")
//     console.log("url",req.url)
//     console.log("method",req.method)
// })
const PORT = 4000
app.listen(PORT,(err) => err ? console.error(err) : console.log(`Server is running on port ${PORT}`))