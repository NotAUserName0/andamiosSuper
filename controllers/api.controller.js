const Comunicados = require("../models/proveedores")
const Archivos = require("../models/archivos")

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

module.exports = {
    obtenerArchivo,
    obtenerComunicados
}