const express = require("express")
const app = express()
app.use(express.json())

let users = [
    {
        name:"Mohamed",
        email:"mohamed@gmail.com",
        id:0
    },
    {
        name:"Rami",
        email:"Rami@gmail.com",
        id:1
    },
    {
        name:"Wassim",
        email:"Wassim@gmail.com",
        id:2
    }
]
// CRUD : CREATE (post) , READ (get) , UPDATE(put) , DELETE(delete)

app.get("/users",(req,res) => {
    res.send(users)
})

// Add new user
app.post("/add",(req,res) => {
    const newUser = req.body
    newUser.id = Date.now()
    users = [...users,newUser] 
    res.send(users)
})

// edit
app.put("/edit/:userId",(req,res) => {
    const userId = req.params.userId
    users = users.map(user => user.id == userId ? {...user,...req.body} : user)
    res.send(users)

})

app.delete("/delete/:userId",(req,res) => {
    const userId = req.params.userId
    users = users.filter(user => user.id != userId)
    res.send(users)
})




const PORT = 5000
app.listen(PORT,(err) => err ? console.error(err) : console.log(`Server is running on port ${PORT}`))