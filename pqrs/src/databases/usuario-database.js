const usuario = require("../models/usuario-modelo");
const bcrypt = require ('bcryptjs')

const getUsuario = async (user) => {
  return await usuario.findOne({ correo: user });
};

const getUsuarios = async () => {
  return await usuario.find(
    {},
    {
      nombres: 1,
      apellidos: 1,
      correo: 1,
      cargo: 1,
      id: 1,
      grupo: 1,
    }
  );
};

const registrarUsuarios = async(user, pass) =>{
  const use = new usuario({
    nombres:user.nombres,
    apellidos:user.apellidos,
    correo:user.correo,
    cargo:user.cargo,
    contrasenia:pass,
    grupo:user.grupo,
    insertDate: new Date (),
})
  await use.save()
    const userId = await usuario.findOne({
    correo:user.correo
  },{_id:1})

  await usuario.updateOne({
    _id:userId._id.toString()
  },{$set:{id:userId._id.toString()}})
  return 'Usuario Registrado'
}

const encrypt = async (textPlain) =>{
  const hash = await bcrypt.hash(textPlain, 5)
  return hash
}

const cambioContrasena = async(user,pass) => {
  await usuario.updateOne({
     correo:user
  },{
    $set:{
      contrasenia:await encrypt(pass)
    }
  }) 
  return 400 
}

module.exports = { getUsuario, getUsuarios,registrarUsuarios,cambioContrasena };
