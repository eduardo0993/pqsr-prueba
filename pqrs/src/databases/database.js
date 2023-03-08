const mongoose = require("mongoose");
require("dotenv").config()


const url= process.env.DBLOCAL

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("CONEXION EXITOSA.");
  } catch (error) {
    throw new Error("Error de conexion en la base de datos ");
  }
};

module.exports = { dbConnection };
