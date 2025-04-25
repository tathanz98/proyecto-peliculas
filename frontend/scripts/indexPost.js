const axios = require("axios");

const crearMovie = async (movieData) => {
  try {
    await axios.post("http://localhost:3000/moviesPost", movieData);
    alert("Película creada con éxito");
  } catch (err) {
    throw Error("este es tu error: ", err);
  }
};

module.exports = crearMovie;
