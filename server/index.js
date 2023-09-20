const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())


const dbUri = process.env.MONGODB_URI
mongoose.connect(dbUri);

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
})

const UserModel = mongoose.model("users", userSchema)

app.post("/login", (req, res) => {
    const {login, password} = req.body;
    UserModel.findOne({login: login})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Login successful. ✔️")
            } else {
                res.json("Incorrect password Try another one")
            }
        } else {
            res.json("User not registered...")
        }
        })
    })

app.listen(3001, () => {
    console.log("Another server working just fine");
})