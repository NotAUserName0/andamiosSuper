const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const jwt = require('../auth/jwt.auth')
const admin = require('../controllers/admin.controller')

router.use(express.json())

router.post('/login', admin.login)
router.get('/verificarToken', jwt.verificarToken)
router.get('/obtenerUsuarios',jwt.tokenMiddleware, admin.obtenerUsuarios)
router.post('/crearUsuario',jwt.tokenMiddleware, admin.crearUsuario)
router.post('/verificarPassword',jwt.tokenMiddleware, admin.verificarPassword)
router.delete('/eliminarUsuario/:id',jwt.tokenMiddleware, admin.eliminarUsuario)
router.put('/modificarUsuario',jwt.tokenMiddleware, admin.modificarUsuario)


module.exports = router;
