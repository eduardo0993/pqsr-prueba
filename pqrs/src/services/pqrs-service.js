const ideaDataBase = require("../databases/pqrs-database");
const fs = require("fs");
const path = require('path')

const crearpqrs = async (data) => {
  return await ideaDataBase.crearpqrs(data);
};

const obtenerpqrs = async () => {
  return await ideaDataBase.obtenerpqrs();
};

const pqrsUsuarios = async (user) => {
  return await ideaDataBase.pqrsUsuarios(user); 
};

const filtrarpqrstipo = async(tipo) => {
  return await ideaDataBase.filtrarpqrstipo(tipo);
}

const filtrarpqrsarea = async(area) => {
  return await ideaDataBase.filtrarpqrsarea(area);
} 

const estadorpqrs = async(idea,estado) => {
  return await ideaDataBase.estadorpqrs(idea,estado);
}

module.exports = {
   obtenerpqrs,
   pqrsUsuarios,
   crearpqrs,
   filtrarpqrstipo,
   estadorpqrs,
   filtrarpqrsarea
   };


    const consulta = async (wa_id) => {

    wa_id.consulta

}