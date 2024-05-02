const { DataTypes } = require('sequelize');
const db = require("../../database/db")

const Contactos = db.sequelize.define('Contactos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    empresa:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fijo:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    celular:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    correo:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    estadoIN:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    opcion:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    curso:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    numPersonas:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    infoComplementaria:{
        type: DataTypes.TEXT('long'), //file B
        allowNull: true,
    },
    estadoOUT:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    requerimientos:{
        type: DataTypes.TEXT('long'), //file A
        allowNull: true,
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    duda:{
        type: DataTypes.TEXT('long'),
        allowNull: true,
    },
    filename:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    area:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
},{
    timestamps:true,
    createdAt:true,
    updatedAt:false
})

module.exports = Contactos;