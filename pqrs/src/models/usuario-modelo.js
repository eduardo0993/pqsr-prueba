const { Schema, model } = require("mongoose");

const UsuariosSchema = Schema({
  nombres:String,
  apellidos:String,
  correo:String,
  cargo:String,
  contrasenia:String,
  id:String,
  grupo:String,
  insertDate: String,
},{versionKey:false});


UsuariosSchema.method("toJSON", function () {
  const { __v, _id, password, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model("Usuarios", UsuariosSchema);
