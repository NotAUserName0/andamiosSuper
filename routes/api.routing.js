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

router.post('/crearSolicitud',upload.any(),api.crearSolicitud)


module.exports = router;
