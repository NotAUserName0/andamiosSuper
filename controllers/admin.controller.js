const Users = require('../models/admin/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('../auth/jwt.auth');

async function login(req, res) {
    const { usuario, password } = req.body;

    await Users.findOne({ where: { user: usuario } }).then(result => {
        //res.status(200).send(result)
        let obj = result
        bcrypt.compare(password, result.pass, (err, result) => {
            if (err) {
                res.status(502).json({ message: "error" })
            } else if (result) {
                // Contraseña correcta
                //regresa token jwt
                jwt.createJWT(obj.id, obj.user, obj.email).then(token => {
                    res.status(200).json({ token: token })
                }).catch(err => {
                    res.status(500).json({ message: err })
                })
            } else {
                // Contraseña incorrecta
                res.status(401).json({ message: "Contraseña incorrecta" })
            }
        })

    }).catch(error => {
        res.status(500).json({ message: "Usuario no encontrado " })
    })
}

async function obtenerUsuarios(req, res) {
    try{
        await Users.findAll({ attributes: ['id', 'user', 'email'] }).then(result => {
            res.status(200).json(result)
        }).catch(err => {
            res.status(500).json({ message: err })
        })
    }catch(err){
        res.status(500).json({ message: err })
    }
}

async function crearUsuario(req, res) {
    const { user, email, pass } = req.body;
    await Users.create({
        user: user,
        email: email,
        pass: pass
    }).then(result => {
        res.status(200).json({ message: "Usuario creado" })
    }).catch(err => {
        res.status(500).json({ message: err })
    })
}

async function verificarPassword(req, res) {
    const { id, pass } = req.body;
    await Users.findOne({ where: { id:id } }).then(result => {
        bcrypt.compare(pass, result.pass, (err, result) => {
            if (err) {
                res.status(502).json({ message: "error" })
            } else if (result) {
                res.status(200).json({ message: "Contraseña correcta" })
            } else {
                res.status(401).json({ message: "Contraseña incorrecta" })
            }
        })
    })
}

async function eliminarUsuario(req, res) {
    try {
        const { id } = req.params;
        await Users.destroy({ where: { id:id } }).then(result => {
            res.status(200).json({ message: "Usuario eliminado" })
        })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

async function modificarUsuario(req, res) {
    try {
        const { id, user, email, pass } = req.body

        if (pass == "") {
            Users.update({ user: user, email: email }, { where: { id: id } }).then(result => {
                res.status(200).json({ message: "Usuario actualizado" })
            }, err => {
                res.status(500).json({ message: err })
            })
        } else {
            const newPass = await bcrypt.hash(pass, 10)
            Users.update({ user: user, email: email, pass: newPass }, { where: { id: id } }).then(result => {
                res.status(200).json({ message: "Usuario actualizado" })
            }, err => {
                res.status(500).json({ message: err })
            })
        }

    } catch (err) {
        res.status(500).json({ message: err })
    }
}

module.exports = {
    login,
    obtenerUsuarios,
    crearUsuario,
    verificarPassword,
    eliminarUsuario,
    modificarUsuario
}
