const express = require("express");
const routesIdeasController = require('../controlador/pqrs-control')
const router = express.Router();

router.post(
  "/nuevapqrs",
  routesIdeasController.crearpqrs
);

router.post(
  "/obtenerpqrs",
  routesIdeasController.obtenerpqrs
);

router.post(
  "/pqrsUsuarios",
  routesIdeasController.pqrsUsuarios
);

router.post(
  "/filtrarpqrstipo",
  routesIdeasController.filtrarpqrstipo
)

router.post(
  "/filtrarpqrsarea",
  routesIdeasController.filtrarpqrsarea
)

router.post(
  "/estadorpqrs",
  routesIdeasController.estadorpqrs
)

module.exports = router;
