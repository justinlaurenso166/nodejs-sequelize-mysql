const Sequelize = require("sequelize");
const db = new Sequelize("iot", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

module.exports = db