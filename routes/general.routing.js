const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const jwt = require('../auth/jwt.auth')
const andamiosController = require('../controllers/general.controller')

//zona FORMDATA /////////////////////////////////////////////////////////////////////////////////////////////////
//SECCION
router.post('/crearSeccion',upload.any() ,jwt.tokenMiddleware ,andamiosController.crearSeccion)
router.get('/obtenerSeccion/:id',jwt.tokenMiddleware,andamiosController.obtenerSeccion)
router.delete('/eliminarSeccion/:id',jwt.tokenMiddleware,andamiosController.eliminarSeccion)
router.put('/modificarSeccion', upload.any(),jwt.tokenMiddleware, andamiosController.modificarSeccion)
//ARCHIVOS SECCION
router.post('/agregarArchivoASeccion', upload.any(),jwt.tokenMiddleware, andamiosController.agregarArchivoASeccion)
router.delete('/eliminarArchivoSeccion/:id',jwt.tokenMiddleware, andamiosController.eliminarArchivoSeccion)
router.put('/modificarArchivoSeccion', upload.any(),jwt.tokenMiddleware, andamiosController.modificarArchivoSeccion)
//IMAGENES SECCION
router.post('/agregarImagenesASeccion', upload.any(),jwt.tokenMiddleware, andamiosController.agregarImagenASeccion)
router.put('/modificarImagenSeccion', upload.any(),jwt.tokenMiddleware, andamiosController.modificarImagenSecccion)
router.delete('/eliminarImagenSeccion/:id',jwt.tokenMiddleware, andamiosController.eliminarImagenSeccion)

//SUBSECCION
router.post('/crearSubseccion',upload.any(),jwt.tokenMiddleware ,andamiosController.crearSubseccion)
router.get('/obtenerSubseccion/:id',jwt.tokenMiddleware,andamiosController.obtenerSubseccion)
router.delete('/eliminarSubseccion/:id',jwt.tokenMiddleware,andamiosController.eliminarSubseccion)
router.put('/modificarSubseccion', upload.any(),jwt.tokenMiddleware, andamiosController.modificarSubseccion)

//IMAGENES SUBSECCION
router.post('/agregarImagenesASubseccion', upload.any(),jwt.tokenMiddleware, andamiosController.agregarImagenASubseccion)
router.put('/modificarImagenSubseccion', upload.any(),jwt.tokenMiddleware, andamiosController.modificarImagenSubseccion)
router.delete('/eliminarImagenSubseccion/:id',jwt.tokenMiddleware, andamiosController.eliminarImagenSubseccion)
//ARCHIVOS SUBSECCION
router.post('/agregarArchivoASubseccion', upload.any(),jwt.tokenMiddleware, andamiosController.agregarArchivoASubseccion)
router.delete('/eliminarArchivoSubseccion/:id',jwt.tokenMiddleware, andamiosController.eliminarArchivoSubseccion)
router.put('/modificarArchivoSubseccion', upload.any(),jwt.tokenMiddleware, andamiosController.modificarArchivoSubseccion)

//CONTACTO
router.get('/obtenerSolicitudesContacto/:area',jwt.tokenMiddleware,andamiosController.obtenerSolicitudesContacto)
router.get('/obtenerSolicitudContacto/:id',jwt.tokenMiddleware,andamiosController.obtenerSolicitudContacto)
router.delete('/eliminarSolicitudContacto/:id',jwt.tokenMiddleware,andamiosController.eliminarSolicitudContacto)

//SOLICITUDES
router.get('/obtenerSolicitudes/:area',jwt.tokenMiddleware,andamiosController.obtenerSolicitudes)
router.delete('/eliminarSolicitud/:id',jwt.tokenMiddleware,andamiosController.eliminarSolicitud)

//IMAGENES SUCURSALES
router.post('/agregarImagenASucursal', upload.any(),jwt.tokenMiddleware, andamiosController.agregarImagenSucursal)
router.put('/modificarImagenSucursal', upload.any(),jwt.tokenMiddleware, andamiosController.modificarImagenSucursal)


//ARCHIVOS
router.post('/subirArchivo', upload.any(),jwt.tokenMiddleware, andamiosController.subirArchivo)
router.get('/obtenerArchivo/:origen',jwt.tokenMiddleware, andamiosController.obtenerArchivo)

//zona JSON /////////////////////////////////////////////////////////////////////////////////////////////////
router.use(express.json())

//CATEGORIAS
router.post('/crearCategoria',jwt.tokenMiddleware, andamiosController.crearCategoria)
router.get('/obtenerCategorias',jwt.tokenMiddleware, andamiosController.obtenerCategorias)
router.get('/obtenerCategoria/:id',jwt.tokenMiddleware, andamiosController.obtenerCategoria)
router.put('/modificarCategoria',jwt.tokenMiddleware,andamiosController.modificarCategoria)
router.delete('/eliminarCategoria/:id',jwt.tokenMiddleware, andamiosController.eliminarCategoria)
//SUCURSALES
router.post('/crearSucursal',jwt.tokenMiddleware, andamiosController.crearSucursal)
router.get('/obtenerSucursales/:division',jwt.tokenMiddleware, andamiosController.obtenerSucursales)
router.put('/modificarSucursal',jwt.tokenMiddleware, andamiosController.modificarSucursal)
router.delete('/eliminarSucursal/:id',jwt.tokenMiddleware, andamiosController.eliminarSucursal)
//IMAGENES SUCURSALES
router.post('/obtenerImagenesSucursal',jwt.tokenMiddleware, andamiosController.obtenerImagenSucursal)
//COMUNICADOS
router.post('/crearComunicado',jwt.tokenMiddleware, andamiosController.crearComunicado)
router.get('/obtenerComunicados',jwt.tokenMiddleware, andamiosController.obtenerComunicados)
router.delete('/eliminarComunicado/:id',jwt.tokenMiddleware, andamiosController.eliminarComunicado)

router.get('/navbar/:area',jwt.tokenMiddleware, andamiosController.navbar)

module.exports = router;