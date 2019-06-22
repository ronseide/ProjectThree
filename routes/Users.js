const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/User")
users.use(cors())
process.env.SECRET_KEY = "secret"

users.get("/register", (req, res) => {
    console.log("hello world");
    return console.log(res);
})

users.post("/register", (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created_at: today
    }

    console.log(req.body)
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        userData.password = hash
        User.create(userData)
            .then(user => {
                res.json({
                    status: user.email + " registered"
                })
            })
            .catch(err => {
                res.send("error: " + err)
            })
    })
})
module.exports = users