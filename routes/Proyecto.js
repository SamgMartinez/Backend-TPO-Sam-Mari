const { Router } = require('express');
const ProyectoControlador = require('../controllers/Proyecto');
const Proyecto = require('../BD/Model/Proyecto');

const router = Router();

router.get('/', ProyectoControlador.getProyectos);

router.get('/:id', ProyectoControlador.getProyecto);



module.exports = router;