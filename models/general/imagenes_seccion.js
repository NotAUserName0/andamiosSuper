const { DataTypes } = require('sequelize');
const db = require("../../database/db");
const Secciones = require('./secciones');

const Imagenes_Seccion = db.sequelize.define('Imagenes_Secciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    file: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    id_seccion: { // esta es la referencia a seccion o subseccion
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Secciones,
            key: 'id'
        }
    },
    ubicacion: { //si  no es para una seccion poner nombre de la ubicacion
        type: DataTypes.TEXT,
        allowNull: true,
    }
}, {
    timestamps: false
})

Secciones.hasMany(Imagenes_Seccion, {
    foreignKey: 'id_seccion',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Imagenes_Seccion.belongsTo(Secciones, {
    foreignKey: 'id_seccion', 
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
    

module.exports = Imagenes_Seccion