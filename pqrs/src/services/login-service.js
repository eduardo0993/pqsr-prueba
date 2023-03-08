const bcrypt = require("bcryptjs");
const usuarioDataBase = require("../databases/usuario-database");

const getLogin = async (user, pass) => {
  const usuario = await usuarioDataBase.getUsuario(user);
  if (usuario == null) {
    return " 204 Correo o Contraseña  invalidos "; // Correo o Contraseña  invalidos.
  }
  const verContra = await bcrypt.compare(pass, usuario.contrasenia);
  if (!verContra) {
    return " 204 Correo o Contraseña  invalidos "; // Correo o Contraseña  invalidos.
  }

  return  {
    id: usuario.id,
    nombre: usuario.nombres,
    apellido: usuario.apellidos,
    cargo: usuario.cargo,
    grupo: usuario.grupo,
    correo: usuario.correo
  },'Usuario ingreso correctamente';

  
  
};

module.exports = { getLogin };

