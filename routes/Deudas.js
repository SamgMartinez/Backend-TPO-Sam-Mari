const express = require('express');
const deudaControlador = require('../controllers/DeudaControlador');
const router = express.Router();
const {validarJWT} = require('../middelwares/jwtValidador');

router.post('/crearDeuda',validarJWT, deudaControlador.crearDeuda);
router.delete('/eliminarDeuda/:deudaID', validarJWT, deudaControlador.eliminarDeuda);
router.post('/cambiarImagen/:deudaID',validarJWT, deudaControlador.actualizarImagenDeDeuda);
router.post('/deudasEntreUsuarios',validarJWT, deudaControlador.obtenerDeudasEntreUsuarios);
router.post('/pagarDeuda/:deudaID',validarJWT, deudaControlador.marcarDeudaComoPagada);
router.get('/deudasUsuarioPorProyecto/:proyectoId/:usuarioId',validarJWT, deudaControlador.obtenerDeudasUsuarioPorProyecto);
router.get('/deudasDelProyecto/:proyectoId', validarJWT, deudaControlador.obtenerDeudasPorProyecto);

module.exports = router;