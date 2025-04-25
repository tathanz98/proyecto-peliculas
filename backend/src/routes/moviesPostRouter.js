const { Router } = require("express");
const moviesControllers = require("../controllers/moviesControllers");
const moviesRouter = Router();

moviesRouter.post("/", moviesControllers.createMovie);

module.exports = moviesRouter;