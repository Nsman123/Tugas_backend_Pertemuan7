// movie-app/routes/movie.js 

const express = require("express");
// create movie router
const movieRouter = express.Router();


const MovieController = require("../controllers/MovieController");



// GET /movies 
movieRouter.get("/", MovieController.index);

// POST /movies 
movieRouter.post("/", MovieController.store);

// GET /movies/:id 
movieRouter.get("/:id", MovieController.show);

// PUT /movies/:id 
movieRouter.put("/:id", MovieController.update);

// DELETE /movies/:id 
movieRouter.delete("/:id", MovieController.destroy);


// export movie router

module.exports = movieRouter;
