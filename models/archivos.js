const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database/db")

const Archivos = db.sequelize.define('Archivos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    file: {
        type: DataTypes.STRING, // Puedes ajustar según tu necesidad, también puedes usar DataTypes.BLOB para almacenar el contenido directamente
        allowNull: false,
    },
    origen: {   
        type: DataTypes.STRING,
        allowNull: false
    }   
}, {
    timestamps: false
});

module.exports = Archivos