const { DataTypes } = require('sequelize');
const db = require("../../database/db")

const Users = db.sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pass: {
        type: DataTypes.STRING, // Puedes ajustar según tu necesidad, también puedes usar DataTypes.BLOB para almacenar el contenido directamente
        allowNull: true,
    },
},{
    timestamps:false
})

module.exports = Users