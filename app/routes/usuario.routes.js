const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController.js');
const authMiddleware = require('../middlewares/isAutenticado.js');

router.get('/usuario', [authMiddleware.check], usuarioController.findAll);

router.post('/usuario', [authMiddleware.check], usuarioController.store);

router.get('/usuario/:id', [authMiddleware.check], usuarioController.findOne);

router.put('/usuario/:id', [authMiddleware.check], usuarioController.update);

router.delete('/usuario/:id', [authMiddleware.check], usuarioController.delete);

module.exports = router;
