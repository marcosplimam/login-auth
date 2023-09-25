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
    fullname: String,
    login: String,
    password: String,
})

const UserModel = mongoose.model("users", userSchema)


app.post("/register", async (req, res) => {
    try {
        const { fullname, login, password } = req.body;

        // Checar se já existe algum usuário com esse username
        const existingUser = await UserModel.findOne({ login: login });

        if (existingUser) {
            return res.status(400).json({ error: "Username already exists." });
        }

        // Criar novo usuário
        const newUser = await UserModel.create({ fullname, login, password });
        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred." });
    }
});

app.post("/login", (req, res) => {
    const {fullname, login, password} = req.body;
    UserModel.findOne({login: login})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Login successful. ✔️")
            } else {
                res.json("Your password is incorrect, please try another one.")
            }
        } else {
            res.json("User not registered...")
        }
        })
    })

app.listen(3001, () => {
    console.log("Another server working just fine");
})