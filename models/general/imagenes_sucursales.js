const { DataTypes } = require('sequelize');
const db = require("../../database/db");
const Sucursales = require('./sucursales');

const Imagenes_Sucursal = db.sequelize.define('Imagenes_Sucursales', {
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
    id_sucursal: { // esta es la referencia a seccion o subseccion
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Sucursales,
            key: 'id'
        }
    },
    main:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    division:{
        type: DataTypes.TEXT,
        allowNull: true,
    }
}, {
    timestamps: false
})

Sucursales.hasMany(Imagenes_Sucursal, {
    foreignKey: 'id_sucursal',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Imagenes_Sucursal.belongsTo(Sucursales, {
    foreignKey: 'id_sucursal', 
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Imagenes_Sucursal
