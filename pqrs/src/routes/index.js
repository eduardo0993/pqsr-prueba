const pqrsRoutes = require("./pqrs-router");
const loginRoutes = require("./login-router");
const usuarioRoutes = require("./usuario-router");

module.exports = (app) => {
  app.use("/api", loginRoutes);
  app.use("/api", pqrsRoutes);
  app.use("/api", usuarioRoutes);

  app.get("/load", (req, resp) => {
    resp.send("Api Loading");
  });
};
