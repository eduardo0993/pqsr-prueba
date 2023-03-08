const usuarioService = require("../services/usuario-service");



const getUsuarios = async (req, res) => {
  try {
    const resp =await usuarioService.getUsuarios();
    return res.status(200).send(resp);
  } catch (e) {
    return res.status(422).send({
      Status: "Error",
      Message: "Comuniquese con el administrador",
      Token: null,
    });
  }
};

const registrarUsuarios = async (req, res) => {
try {
  const estado = await usuarioService.registrarUsuarios(req.body);
  return res.status(200).send(estado);
  } catch (e) {
    console.log (e)
     return res.status(422).send({
     Status:"Error",
     Message: "Comuniquese con el administrador",
     Token: null,
    })
 }
};

const cambioContrasena = async (req, res) => {
try {
  const camContra = await usuarioService.cambioContrasena(req.body);
  return res.status(200).send(camContra);
  } catch (e) {
      console.log (e)
        return res.status(422).send({
        Status:"Error",
        Message: "Comuniquese con el administrador",
        Token: null,
      })
}

}

module.exports = {
    getUsuarios, registrarUsuarios, cambioContrasena
};
