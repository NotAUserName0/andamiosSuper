const { DataTypes } = require('sequelize');
const db = require("../../database/db")

const Sucursales = db.sequelize.define('Sucursales', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.TEXT('medium'),
        allowNull: false,
    },
    direccion:{
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    telefono:{
        type:DataTypes.TEXT('long'),
        allowNull: false,
    },
    maps:{
        type:DataTypes.TEXT('long'),
        allowNull: false,
    },
    division:{
        type:DataTypes.TEXT('long'),
        allowNull: false,
    }
},{
    timestamps:false
})

module.exports = Sucursales;