const { DataTypes } = require('sequelize');
const db = require("../../database/db")

const Carrusel = db.sequelize.define('Carrusel',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    filename:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    file: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    fileResponsive: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    }
},{
    timestamps: true,
    createdAt:true,
    updatedAt:false
});

module.exports = Carrusel