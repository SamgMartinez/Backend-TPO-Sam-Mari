const { Router } = require('express');
const UsuarioControlador = require('../controllers/UsuarioControlador');
const Usuario = require('../BD/Model/Usuario');

const router = Router();

router.get('/', UsuarioControlador.getUsuarios);
router.get('/:id', UsuarioControlador.getUsuario);
router.post('/login', UsuarioControlador.loginUsuario);
router.post('/registrarse', UsuarioControlador.registrarUsuario);

module.exports = router;