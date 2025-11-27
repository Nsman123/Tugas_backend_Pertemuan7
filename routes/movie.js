// movie-app/routes/movie.js (Perbaikan dan Pembersihan)

const express = require("express");
// create movie router
const movieRouter = express.Router();

// Perbaikan 1: Import MovieController yang sebenarnya (asumsi letaknya di ../controllers/MovieController)
const MovieController = require("../controllers/MovieController");

// Definisikan Rute Movie menggunakan MovieController methods
// Rute duplikat lama telah dihapus untuk menghindari penimpaan

// GET /movies - Mendapatkan semua film (index)
movieRouter.get("/", MovieController.index);

// POST /movies - Menambah film baru (store)
movieRouter.post("/", MovieController.store);

// GET /movies/:id - Mendapatkan film berdasarkan ID (show)
movieRouter.get("/:id", MovieController.show);

// PUT /movies/:id - Memperbarui film berdasarkan ID (update)
movieRouter.put("/:id", MovieController.update);

// DELETE /movies/:id - Menghapus film berdasarkan ID (destroy)
movieRouter.delete("/:id", MovieController.destroy);


// export movie router
module.exports = movieRouter;