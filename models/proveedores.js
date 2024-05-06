const { DataTypes } = require('sequelize');
const db = require("../database/db");

const Comunicados = db.sequelize.define('Comunicados', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    comunicado:{
        type: DataTypes.TEXT('long'),
        allowNull: true,
    },
    link:{
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    timestamps:true,
    createdAt: true,
    updatedAt: false,
})

module.exports = Comunicados;