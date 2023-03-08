const usuarioDataBase = require("../databases/usuario-database");
const usuarioModel = require("../models/usuario-modelo");
const bcrypt = require ('bcryptjs')

const getUsuarios = async () => {
  return await usuarioDataBase.getUsuarios();
};

const encrypt = async (textPlain) =>{
  const hash = await bcrypt.hash(textPlain, 5)
  return hash

}

const registrarUsuarios = async(user) =>{
  const contra = await encrypt('GrupoASD123')
  return await usuarioDataBase.registrarUsuarios(user,contra)
}

 const cambioContrasena = async (user) => { 
  const usuario = await usuarioDataBase.getUsuario(user.correo);
  if (usuario == null) {
    return 404; // usuario no existe.
  }else{
    const comContra = await bcrypt.compare(user.contrasenia, usuario.contrasenia);
    if (!comContra){
      return 404; // contraseña invalida
    } else{
      return await usuarioDataBase.cambioContrasena(usuario.correo, user.nueva)
    }   
  } 
} 

module.exports = { getUsuarios, registrarUsuarios, cambioContrasena };
