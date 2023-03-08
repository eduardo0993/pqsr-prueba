const { Schema, model } = require("mongoose");

const pqrsSchema = Schema({
  tipo:String,
  descripcion: String,
  estado: String,
  fecha_registro: Date,
  autor: String,
  area: String,
  funcionario:String
},{versionKey:false});

pqrsSchema.method("toJSON", function () {
  const { __v, _id, password, ...object } = this.toObject();
  object.uid = _id;
  
  return object;
});

module.exports = model("pqrs", pqrsSchema);