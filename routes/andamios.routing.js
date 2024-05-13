const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const jwt = require('../auth/jwt.auth')
const andamiosController = require('../controllers/andamios.controller')

//zona FORMDATA /////////////////////////////////////////////////////////////////////////////////////////////////

//Carrusel
router.post('/agregarCarrusel',upload.any(),jwt.tokenMiddleware ,andamiosController.agregarCarrusel)
router.get('/obtenerCarrusel',jwt.tokenMiddleware,andamiosController.obtenerCarrusel)
router.delete('/eliminarCarrusel/:id',jwt.tokenMiddleware,andamiosController.eliminarCarrusel)
router.put('/modificarCarrusel', upload.any(),jwt.tokenMiddleware, andamiosController.modificarCarrusel)


//ZONA JSON
router.use(express.json())
//Anuncio
router.post('/agregarAnuncio',upload.any(),jwt.tokenMiddleware ,andamiosController.crearAnuncio)
router.get('/obtenerAnuncio',jwt.tokenMiddleware,andamiosController.obtenerAnuncio)
router.delete('/eliminarAnuncio/:id',jwt.tokenMiddleware,andamiosController.eliminarAnuncio)
router.put('/modificarAnuncio', upload.any(),jwt.tokenMiddleware, andamiosController.modificarAnuncio)

module.exports = router;
