const { DataTypes } = require('sequelize');
const db = require("../../database/db");
const Secciones = require('./secciones');
const Subsecciones = require('./subsecciones');

const Archivos_Subseccion = db.sequelize.define('Archivos_Subsecciones', {
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
            model: Subsecciones,
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

Subsecciones.hasMany( Archivos_Subseccion, {
    foreignKey: 'id_elemento',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Archivos_Subseccion.belongsTo( Subsecciones, {
    foreignKey: 'id_elemento',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

module.exports = Archivos_Subseccion