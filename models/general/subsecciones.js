const { DataTypes } = require('sequelize');
const db = require("../../database/db")
const Secciones = require('./secciones')

const Subsecciones = db.sequelize.define('Subsecciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    btn_pdf: { //si es 1 busca en la tabla PDF
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    btn_contacto: { //si es 1 habilita btn cotizar
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    seccion: {
        type: DataTypes.INTEGER,
        references: {
            model: Secciones,
            key:'id'
        }
    }
}, {
    timestamps: false
})

Secciones.hasMany(Subsecciones, {
    foreignKey: 'seccion',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Subsecciones.belongsTo(Secciones, {
    foreignKey: 'seccion',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});
 
module.exports = Subsecciones