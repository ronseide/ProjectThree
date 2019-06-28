var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))

var Users = require("./routes/Users")
var Currencies = require("./routes/Currencies")

app.use("/users", Users)
app.use("/currencies", Currencies)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})