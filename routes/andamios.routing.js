const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const jwt = require('../auth/jwt.auth')
const andamiosController = require('../controllers/andamios.controller')

//zona FORMDATA /////////////////////////////////////////////////////////////////////////////////////////////////

//Carrusel
router.post('/agregarCarrusel',upload.any() ,andamiosController.agregarCarrusel)
router.get('/obtenerCarrusel',andamiosController.obtenerCarrusel)
router.delete('/eliminarCarrusel/:id',andamiosController.eliminarCarrusel)
router.put('/modificarCarrusel', upload.any(), andamiosController.modificarCarrusel)


//ZONA JSON
router.use(express.json())
//Anuncio
router.post('/agregarAnuncio',upload.any() ,andamiosController.crearAnuncio)
router.get('/obtenerAnuncio',andamiosController.obtenerAnuncio)
router.delete('/eliminarAnuncio/:id',andamiosController.eliminarAnuncio)
router.put('/modificarAnuncio', upload.any(), andamiosController.modificarAnuncio)

module.exports = router;
