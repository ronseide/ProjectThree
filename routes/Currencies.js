const express = require("express")
const currencies = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Currency = require("../models/Currency")

currencies.use(cors())
// process.env.SECRET_KEY = "secret"

currencies.get("/currency/:id", (req, res) => {
    const today = new Date()
   
    Currency.findAll({
        where: {
            user_id: req.params.id
        }
    }).then (currencies => {
        return res.send(currencies)
    })
});

currencies.post("/currency", (req, res) => {
    const today = new Date()

    const currencyData = {
        currency_name: req.body.currency_name,
        user_id: req.body.user_id,
        created_at: today
    }

    Currency.create(currencyData)
        .then(c => {
            console.log(currencyData);
            console.log(c);
            res.json({
                status: c
            })
        })
});

module.exports = currencies;
