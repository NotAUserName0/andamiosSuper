const { DataTypes } = require('sequelize');
const db = require("../../database/db")

const Anuncios = db.sequelize.define('Anuncios',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    hasBtn: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    },
    btnText: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    url:{
        type: DataTypes.TEXT,
        allowNull:false
    }
},{
    timestamps:false
})

module.exports = Anuncios