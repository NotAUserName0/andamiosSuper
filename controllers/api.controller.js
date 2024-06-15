const Comunicados = require("../models/proveedores")
const Archivos = require("../models/archivos")
const Solicitudes = require("../models/general/solicitudes")
const Categorias = require("../models/general/categorias")
const Secciones = require("../models/general/secciones")
const Subsecciones = require("../models/general/subsecciones")
const Carrusel = require("../models/andamios/carrusel")
const Anuncio = require("../models/andamios/anuncio")
const Imagenes_Seccion = require("../models/general/imagenes_seccion")
const Archivos_Seccion = require("../models/general/archivos_seccion")

async function obtenerArchivo(req, res) {
    const { origen } = req.params
    try {
        const exist = await Archivos.findOne({ where: { origen: origen } })
        if (exist) {
            res.status(200).send(exist)
        } else {
            res.status(200).send({ message: "no existe" })
        }
    } catch (error) {
        res.status(500).send('error: ' + error)
    }
}

async function obtenerComunicados(req, res) {
    try {
        await Comunicados.findAll().then((rows) => {
            res.status(200).send(rows)
        }).catch((err) => {
            res.status(500).json({ message: err })
        })
    } catch (err) {
        res.status(500).json({ message: "error" })
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

        const { area } = req.params

        const categorias = await Categorias.findAll({
            attributes: ['id', 'nombre', 'tipo', 'url'],
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
            attributes: ['id', 'nombre', 'url'],
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

async function obtenerCarrusel(req, res) {
    try {
        await Carrusel.findAll().then((rows) => {
            res.status(200).send(rows)
        }).catch((err) => {
            res.status(500).json({ message: err })
        })
    } catch (err) {
        res.status(500).json({ message: "error" })
    }
}

async function obtenerAnuncio(req, res) {
    try {
        await Anuncio.findAll().then((result) => {
            res.status(200).send(result[0])
        })
    } catch (error) {
        res.status(500).send('error: ' + error)
    }
}

async function obtenerInicio(req, res) {
    try {
        const { area } = req.params

        const categorias = await Categorias.findAll({
            attributes: ['id', 'nombre', 'url', 'banner'],
            where: { area: area, mostrar_inicio: true },
        });
        const inicio = [];

        for (const categoria of categorias) {
            const secciones = await Secciones.findAll({
                where: { categoria: categoria.id, mostrar_inicio: true },
                attributes: ['id', 'nombre', 'url', 'imagen_inicio'],
            });

            inicio.push({
                id: categoria.id,
                titulo: categoria.nombre,
                url: categoria.url,
                banner: categoria.banner,
                secciones: secciones,
            });
        }

        res.status(200).send(inicio)

    } catch (err) {
        res.status(500).json({ message: "error" })
    }
}

async function obtenerTipoCategoria(req, res) {

    try {
        const { url } = req.params

        await Categorias.findOne({
            attributes: ['id', 'tipo', 'nombre'],
            where: { url: url },
        }).then((result) => {
            res.status(200).send(result)
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }

}

async function obtenerSecciones(req, res) {
    try {
        const { id, tipo } = req.body


        switch (tipo) {
            case 'A': //done
                await Secciones.findAll({
                    where: { categoria: id },
                    attributes: ['id', 'nombre', 'url', 'imagen_inicio'],
                }).then((secciones) => {
                    res.status(200).send(secciones)
                })
                break;
            case 'B':
                await Secciones.findAll({
                    where: { categoria: id },
                    attributes: ['id', 'nombre', 'descripcion', 'imagen_inicio'],
                }).then((secciones) => {
                    res.status(200).send(secciones)
                })
                break;
            case 'C':
                
            console.log('entro a C');
                const seccionesC = await Secciones.findAll({ where: { categoria: id } });

                const elementosConImagenes = [];

                for (const seccion of seccionesC) {
                    // Creamos el objeto elemento con los datos de la sección
                    const elemento = {
                        id: seccion.id,
                        nombre: seccion.nombre,
                        descripcion: seccion.descripcion,
                        btn_contacto: seccion.btn_contacto,
                        imagen_inicio: seccion.imagen_inicio
                    };
                
                    // Buscamos las imágenes relacionadas con esta sección
                    const imagenes = await Imagenes_Seccion.findAll({ where: { id_seccion: seccion.id } }).catch((err) => {
                        console.log(err);
                    })
                
                    // Añadimos las imágenes al objeto elemento
                    elemento.imagenes = imagenes;
                
                    // Agregamos el elemento a la lista
                    elementosConImagenes.push(elemento);
                }
                
                res.status(200).send(elementosConImagenes);

                break;
            case 'D':

                const secciones = await Secciones.findAll({ where: { categoria: id } });

                const elementosConArchivos = [];

                for (const seccion of secciones) {
                    // Creamos el objeto elemento con los datos de la sección
                    const elemento = {
                        id: seccion.id,
                        nombre: seccion.nombre,
                        descripcion: seccion.descripcion,
                        btn_pdf: seccion.btn_pdf,
                        imagen_inicio: seccion.imagen_inicio
                    };
                
                    // Buscamos los archivos relacionados con esta sección
                    const archivos = await Archivos_Seccion.findAll({ where: { id_elemento: seccion.id } });
                
                    // Añadimos los archivos al objeto elemento
                    elemento.archivos = archivos;
                
                    // Agregamos el elemento a la lista
                    elementosConArchivos.push(elemento);
                }

                res.status(200).send(elementosConArchivos);

                break;
            default:
                res.status(500).json({ message: "se necesita el tipo de dato" })

        }
    } catch (err) {
        res.status(500).json({ message: "error" })
    }

}

module.exports = {
    obtenerArchivo,
    obtenerComunicados,
    crearSolicitud,
    navbar,
    obtenerCarrusel,
    obtenerAnuncio,
    obtenerInicio,
    obtenerTipoCategoria,
    obtenerSecciones
}