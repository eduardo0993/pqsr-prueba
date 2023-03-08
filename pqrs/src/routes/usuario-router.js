const express = require("express");
const routesController = require("../controlador/usuario_controlador");

const router = express.Router();

router.post("/usuarios", routesController.getUsuarios);

router.post("/registroUsuarios", routesController.registrarUsuarios);

router.post ("/cambioContrasena",routesController.cambioContrasena);

module.exports = router;
