const { DataTypes } = require('sequelize');
const db = require("../../database/db");
const Subseccion = require('./subsecciones');

const Imagenes_Subseccion = db.sequelize.define('Imagenes_Subsecciones', {
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
    id_subseccion: { // esta es la referencia a seccion o subseccion
        type: DataTypes.INTEGER,
        references: {
            model: Subseccion,
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

Subseccion.hasMany(Imagenes_Subseccion, {
    foreignKey: 'id_subseccion',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Imagenes_Subseccion.belongsTo(Subseccion, {
    foreignKey: 'id_subseccion', 
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

    

module.exports = Imagenes_Subseccion