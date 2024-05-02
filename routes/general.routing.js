const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const jwt = require('../auth/jwt.auth')
const andamiosController = require('../controllers/general.controller')

//zona FORMDATA /////////////////////////////////////////////////////////////////////////////////////////////////
//SECCION
router.post('/crearSeccion',upload.any() ,andamiosController.crearSeccion)
router.get('/obtenerSeccion/:id',andamiosController.obtenerSeccion)
router.delete('/eliminarSeccion/:id',andamiosController.eliminarSeccion)
router.put('/modificarSeccion', upload.any(), andamiosController.modificarSeccion)
//ARCHIVOS SECCION
router.post('/agregarArchivoASeccion', upload.any(), andamiosController.agregarArchivoASeccion)
router.delete('/eliminarArchivoSeccion/:id', andamiosController.eliminarArchivoSeccion)
router.put('/modificarArchivoSeccion', upload.any(), andamiosController.modificarArchivoSeccion)
//IMAGENES SECCION
router.post('/agregarImagenesASeccion', upload.any(), andamiosController.agregarImagenASeccion)
router.put('/modificarImagenSeccion', upload.any(), andamiosController.modificarImagenSecccion)
router.delete('/eliminarImagenSeccion/:id', andamiosController.eliminarImagenSeccion)

//SUBSECCION
router.post('/crearSubseccion',upload.any() ,andamiosController.crearSubseccion)
router.get('/obtenerSubseccion/:id',andamiosController.obtenerSubseccion)
router.delete('/eliminarSubseccion/:id',andamiosController.eliminarSubseccion)
router.put('/modificarSubseccion', upload.any(), andamiosController.modificarSubseccion)

//IMAGENES SUBSECCION
router.post('/agregarImagenesASubseccion', upload.any(), andamiosController.agregarImagenASubseccion)
router.put('/modificarImagenSubseccion', upload.any(), andamiosController.modificarImagenSubseccion)
router.delete('/eliminarImagenSubseccion/:id', andamiosController.eliminarImagenSubseccion)
//ARCHIVOS SUBSECCION
router.post('/agregarArchivoASubseccion', upload.any(), andamiosController.agregarArchivoASubseccion)
router.delete('/eliminarArchivoSubseccion/:id', andamiosController.eliminarArchivoSubseccion)
router.put('/modificarArchivoSubseccion', upload.any(), andamiosController.modificarArchivoSubseccion)

//CONTACTO
router.get('/obtenerSolicitudesContacto/:area',andamiosController.obtenerSolicitudesContacto)
router.get('/obtenerSolicitudContacto/:id',andamiosController.obtenerSolicitudContacto)
router.delete('/eliminarSolicitudContacto/:id',andamiosController.eliminarSolicitudContacto)

//SOLICITUDES
router.get('/obtenerSolicitudes/:area',andamiosController.obtenerSolicitudes)
router.delete('/eliminarSolicitud/:id',andamiosController.eliminarSolicitud)

//zona JSON /////////////////////////////////////////////////////////////////////////////////////////////////
router.use(express.json())

//CATEGORIAS
router.post('/crearCategoria', andamiosController.crearCategoria)
router.get('/obtenerCategorias', andamiosController.obtenerCategorias)
router.get('/obtenerCategoria/:id', andamiosController.obtenerCategoria)
router.put('/modificarCategoria',andamiosController.modificarCategoria)
router.delete('/eliminarCategoria/:id', andamiosController.eliminarCategoria)

router.get('/navbar/:area', andamiosController.navbar)

module.exports = router;