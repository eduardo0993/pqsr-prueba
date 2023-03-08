const express = require("express");
const routesController = require("../controlador/login-control");

const router = express.Router();

router.post("/login", routesController.getLogin);

module.exports = router;
