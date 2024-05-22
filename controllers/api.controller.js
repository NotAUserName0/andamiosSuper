const Comunicados = require("../models/proveedores")
const Archivos = require("../models/archivos")
const Solicitudes = require("../models/general/solicitudes")
const Categorias = require("../models/general/categorias")
const Secciones = require("../models/general/secciones")
const Subsecciones = require("../models/general/subsecciones")
const Carrusel = require("../models/andamios/carrusel")

async function obtenerArchivo(req, res) {
    const {origen} = req.params
    try {
        const exist = await Archivos.findOne({ where: { origen: origen } })
        if (exist) {
            res.status(200).send(exist)
        } else {
            res.status(200).send({message:"no existe"})
        }
    } catch (error) {
        res.status(500).send('error: ' + error)
    }
}

async function obtenerComunicados(req,res){
    try{
        await Comunicados.findAll().then((rows)=>{
            res.status(200).send(rows)
        }).catch((err)=>{
            res.status(500).json({message:err})
        })
    }catch(err){
        res.status(500).json({message:"error"})
    }
}

async function crearSolicitud(req, res) {
    const { nombre, escolaridad, area, email, telefono, division } = req.body
    const file = req.files[0]

    try {
        await Solicitudes.create({
            nombre: nombre,
            escolaridad: escolaridad,
            area: area,
            email: email,
            telefono: telefono,
            filename: file.originalname,
            file: file.buffer.toString('base64'),
            division: division
        }).then((solicitud) => {
            res.status(200).send(solicitud)
        }).catch((err) => {
            res.status(500).json({ message: err })
        })
    } catch (err) {
        res.status(500).json({ message: "error" })
    }
}

async function navbar(req, res) {
    try {

        const {area} = req.params

        const categorias = await Categorias.findAll({
            attributes: ['id', 'nombre' ,'tipo', 'url'],
            where: { area: area },
          });
        const navbar = [];

        for (const categoria of categorias) {
            const seccionesYSubsecciones = await obtenerSeccionesYSubsecciones(categoria.id);

            navbar.push({
                id: categoria.id,
                titulo: categoria.nombre,
                tipo: categoria.tipo,
                url: categoria.url,
                secciones: seccionesYSubsecciones,
            });
        }

        res.status(200).send(navbar);
    } catch (error) {
        res.status(500).json({ message: "Error de endpoint: " + error });
    }
}

async function obtenerSeccionesYSubsecciones(idCategoria) {
    const secciones = await Secciones.findAll({
        where: { categoria: idCategoria },
        attributes: ['id', 'nombre', 'url'],
    });

    const seccionesConSubsecciones = [];

    for (const seccion of secciones) {
        const subsecciones = await Subsecciones.findAll({
            where: { seccion: seccion.id },
            attributes: ['id', 'nombre','url'],
        });

        seccionesConSubsecciones.push({
            id: seccion.id,
            titulo: seccion.nombre,
            url: seccion.url,
            subsecciones: subsecciones,
        });
    }

    return seccionesConSubsecciones;
}

async function obtenerCarrusel(req,res){
    try{
        await Carrusel.findAll().then((rows)=>{
            res.status(200).send(rows)
        }).catch((err)=>{
            res.status(500).json({message:err})
        })
    }catch(err){
        res.status(500).json({message:"error"})
    }
}

module.exports = {
    obtenerArchivo,
    obtenerComunicados,
    crearSolicitud,
    navbar,
    obtenerCarrusel
}