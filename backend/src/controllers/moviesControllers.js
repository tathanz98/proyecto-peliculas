const moviesService = require("../service/moviesService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await moviesService.getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        error: "no se pueden visualizar las peliculas correctamente",
      });
    }
  },
  createMovie: async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    try {
      const newMovie = await moviesService.createMovies({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({
        error: "no se pudo agregar la película de manera correcta",
      });
    }
  },
};