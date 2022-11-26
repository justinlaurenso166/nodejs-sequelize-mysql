const Sequelize = require("sequelize")
const db = require("../config/database")

const { DataTypes } = Sequelize

const Mahasiswa = db.define("mahasiswas", {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nama: {
        type: DataTypes.STRING
    },
    Age: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
})

module.exports = Mahasiswa