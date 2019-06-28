const express = require("express")
const currencies = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Currency = require("../models/Currency")

currencies.use(cors())

currencies.get("/currency", (req, res) => {
    const today = new Date()
   
    Currency.findAll({
        where: {
            user_id: req.body.user_id
        }
    }).then (currencies => {
        return res.send(currencies)
    })
});

currencies.post("/currency", (req, res) => {
    const today = new Date()

    const currencyData = {
        currency_name: req.body.currency_name,
    }
    Currency.findOne({
        where: {
            user_id: req.body.user_id
        }
    })
    .then(function(result){
        res.json(result);
    });
});

module.exports = currencies;
