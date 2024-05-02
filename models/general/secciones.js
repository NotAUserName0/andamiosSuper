const { DataTypes } = require('sequelize');
const db = require("../../database/db")
const Categorias = require('./categorias')

const Secciones = db.sequelize.define('Secciones', {
    //Generales
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
        allowNull: true,
    },
    descripcion: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    //Para tipo A y B
    mostrar_inicio: { //muestra inicio
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    imagen_inicio: { //gif o imagen principal de muestra en el area general
        type: DataTypes.TEXT('long'),
        allowNull: true,
    },
    btn_pdf: { //si es 1 busca en la tabla PDF
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    //para tipo C
    //para tipo D
    btn_contacto: { //si es 1 habilita btn cotizar
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorias,
            key: 'id'
        }
    }
}, {
    timestamps: false
})

Categorias.hasMany(Secciones, { 
    foreignKey: 'categoria',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
 });

Secciones.belongsTo(Categorias, { 
    foreignKey: 'categoria', 
    onUpdate: 'CASCADE', 
    onDelete: 'CASCADE' 
});

module.exports = Secciones