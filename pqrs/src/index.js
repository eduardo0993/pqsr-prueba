const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routesApi = require("../src/routes/index");
require("../src/databases/database").dbConnection();
const multer = require("multer");
const path = require("path");
require("dotenv").config();


// App de Express
const app = express();
const server = require("http").createServer(app);

app.use(cors());

app.use(express.json({ limit: "25mb", extended: true }));
app.set("json spaces", 2);
app.use(express.urlencoded({ extended: false })); 


routesApi(app);



server.listen(process.env.PORT || 3000, (err) => {
  if (err) throw new Error(err);
  console.log("Servidor ejecuntadose en el puerto:", process.env.PORT||3000);
});

module.exports = app;
