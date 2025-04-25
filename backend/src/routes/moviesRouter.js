const { Router } = require("express");
const moviesControllers = require("../controllers/moviesControllers");
const moviesRouter = Router();

moviesRouter.get("/", moviesControllers.getAllMovies);

module.exports = moviesRouter;