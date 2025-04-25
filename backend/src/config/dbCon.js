const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://tathanz543:iUBbe0Mb8Klcs9cg@proyectom2.itybdvi.mongodb.net/?retryWrites=true&w=majority&appName=proyectoM2"
  );
};

module.exports = dbCo