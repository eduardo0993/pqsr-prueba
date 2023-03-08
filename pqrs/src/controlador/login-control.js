const loginService = require("../services/login-service");

const getLogin = async (req, res) => {
  const user = req.body;

  try {
    const resp = await loginService.getLogin(user.correo, user.contrasenia);
    return res.status(200).send(resp);
    
  } catch (e) {
    return res.status(500).send({
      Status: "Error",
      Message: "Comuniquese con el administrador",
      Token: null,
    });
  }
};

module.exports = {
  getLogin,
};