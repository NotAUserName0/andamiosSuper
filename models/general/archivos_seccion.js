const { DataTypes } = require('sequelize');
const db = require("../../database/db");
const Secciones = require('./secciones');

const Archivos_Seccion = db.sequelize.define('Archivos_Secciones', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    file:{
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    id_elemento:{ // esta es la referencia a seccion o subseccion
        type: DataTypes.INTEGER,
        references: {
            model: Secciones,
            key: 'id'
        }
    },
    ubicacion:{ //si  no es para una seccion poner nombre de la ubicacion
        type: DataTypes.TEXT,
        allowNull: true,
    }
},{
    timestamps: false
})

Secciones.hasMany( Archivos_Seccion, {
    foreignKey: 'id_elemento',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Archivos_Seccion.belongsTo( Secciones, {
    foreignKey: 'id_elemento',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


module.exports = Archivos_Seccion