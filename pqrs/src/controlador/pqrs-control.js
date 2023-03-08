const ideaService = require("../services/pqrs-service");
const path = require("path");

const crearpqrs = async (req, res) => {
  const data = req.body;
  try {
    const resp = await ideaService.crearpqrs(data);
    return res.status(200).send(resp);
   } catch (e) {
    return res.status(400).send({
      Status: "No se ha podido registrar la pqrs, verifique si tiene algun campo vacio",
      Message: "Comuniquese con el administrador",
    });
  }
};

// todas pqrs usuario administrador 
const obtenerpqrs = async (req, res) => {
  try {
    const resp = await ideaService.obtenerpqrs();
    return res.status(200).send(resp);
   } catch (e) {
    return res.status(404).send({
      Status: "Error, no existen pqrs registradas",
      Message: "Comuniquese con el administrador",
    });
  }
};

// pqrs por usuario
const pqrsUsuarios = async (req, res) => {
  try {
    const resp = await ideaService.pqrsUsuarios(req.body.usuario_id);
    return res.status(200).send(resp);
   } catch (e) {
    return res.status(404).send({
      Status: "Error, no existen pqrs registradas para este usuario",
      Message: "Comuniquese con el administrador",
    });
  }
};

// filtro pqrs tipo 
const filtrarpqrstipo = async (req, res) => {
  try {
    const resp = await ideaService.filtrarpqrstipo(req.body.tipo);
    return res.status(200).send(resp);
   } catch (e) {
    return res.status(404).send({
      Status: "no existen pqrs registradas de este tipo",
      Message: "Comuniquese con el administrador",
    });
  }
};
// filtro pqrs area
const filtrarpqrsarea = async (req, res) => {
  try {
    const resp = await ideaService.filtrarpqrsarea(req.body.area);
    return res.status(200).send(resp);
   } catch (e) {
    return res.status(404).send({
      Status: "no existen pqrs registradas para esta area",
      Message: "Comuniquese con el administrador",
    });
  }
};
// cambio  de estado pqrs
const estadorpqrs = async (req, res) => {
  
  try {
    const resp = await ideaService.estadorpqrs(req.body._id,req.body.estado);
    return res.status(200).send(resp);
   } catch (e) {
    return res.status(404).send({
      Status: "no existen pqrs registradas",
      Message: "Comuniquese con el administrador",
    });
  }
};

module.exports = {
  crearpqrs,
  obtenerpqrs,
  pqrsUsuarios,
  filtrarpqrstipo,
  estadorpqrs,
  filtrarpqrsarea
};
