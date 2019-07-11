const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("aipcxq54bp7y6799", "gn5oj9mm5pzz7z8l", "password123", {
    host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    //    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db