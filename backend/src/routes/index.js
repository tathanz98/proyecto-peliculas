const { Router } = require("express");
const moviesRouter = require("./moviesRouter");
const moviesPostRouter = require("./moviesPostRouter");
const router = Router();

router.use("/movies", moviesRouter);
router.use("/moviesPost", moviesPostRouter);

module.exports = router;