const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const api = require('../controllers/api.controller')

router.get('/obtenerArchivo/:origen',api.obtenerArchivo)
router.get('/obtenerComunicados',api.obtenerComunicados)
router.get('/navbar/:area',api.navbar)
router.get('/obtenerCarrusel',api.obtenerCarrusel)
router.get('/obtenerAnuncio', api.obtenerAnuncio)
router.get('/obtenerInicio/:area', api.obtenerInicio)
router.get('/obtenerTipoCategoria/:url', api.obtenerTipoCategoria)
router.get('/obtenerImagenSucursal/:division', api.obtenerImagenSucursal)
router.get('/obtenerSucursales/:division', api.obtenerSucursales)

router.post('/crearSolicitud',upload.any(),api.crearSolicitud)

router.use(express.json())
router.post('/obtenerSecciones',api.obtenerSecciones)


module.exports = router;
