// movie-app/controllers/MovieController.js

// Perbaikan: Menggunakan "../" untuk naik satu level ke folder "movie-app", lalu masuk ke "constants"
const dataMovie = require("../constants/data-movie"); 

//create data index method to get all movie
const index = (req, res) => {
    const response = {
        status : "success",
        message : "List of all movies",
        data : dataMovie,
    };
    res.status (200).json(response);
};

//create store method to add new movie
const store = (req, res) => {
    const {title,director,year,genre,rating}= req.body;

    const newMovie = {
        // Perbaikan kecil: Pastikan ID unik (menggunakan panjang array + 1)
        id: dataMovie.length > 0 ? dataMovie[dataMovie.length - 1].id + 1 : 1, 
        title : title,
        director : director,
        year : year,
        genre : genre,
        rating : rating,
    };
    dataMovie.push (newMovie);
    const response = {
        status : "success",
        message : "New movie added",
        data : newMovie,
    };
    res.status(201).json(response);
};

const show = (req,res) => {
    const movieId = parseInt(req.params.id);
    const movie = dataMovie.find((movie)=>movie.id === movieId);

    if (movie) {
        const response = {
            status : "success",
            // Perbaikan: Mengganti kutip tunggal ('') menjadi backtick (`) untuk template literal
            message : `Movie with ID: ${movieId} found`,
            data : movie,
        };
        res.status(200).json(response);
    }
    else {
        const response = {
            status : "error",
            message : `Movie with ID: ${movieId} not found`, // Menggunakan backtick
        };
        res.status(404).json(response); // Menggunakan .json() daripada .send() untuk konsistensi
    }
};

const update = (req, res) => {
    const movieId = parseInt(req.params.id);
    const updatedData = req.body;

    // Cari index movie
    const movieIndex = dataMovie.findIndex((movie) => movie.id === movieId);

    if (movieIndex !== -1) {
        // Gabungkan data lama dengan data baru, pastikan ID tetap sama
        dataMovie[movieIndex] = {
            ...dataMovie[movieIndex],
            ...updatedData,
            id: movieId, // Pastikan ID tidak berubah
        };

        const updatedMovie = dataMovie[movieIndex];
        const response = {
            status: "success",
            message: `Movie with ID: ${movieId} updated successfully`,
            data: updatedMovie,
        };
        res.status(200).json(response);
    } else {
        const response = {
            status: "error",
            message: `Movie with ID: ${movieId} not found for update`,
        };
        res.status(404).json(response);
    }
};

// create destroy method to delete a movie
const destroy = (req, res) => {
    const movieId = parseInt(req.params.id);

    // Cari index movie
    const movieIndex = dataMovie.findIndex((movie) => movie.id === movieId);

    if (movieIndex !== -1) {
        // Hapus movie dari array
        const deletedMovie = dataMovie.splice(movieIndex, 1);

        const response = {
            status: "success",
            message: `Movie with ID: ${movieId} deleted successfully`,
            data: deletedMovie[0],
        };
        res.status(200).json(response);
    } else {
        const response = {
            status: "error",
            message: `Movie with ID: ${movieId} not found for deletion`,
        };
        res.status(404).json(response);
    }
};

// export all methods
module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};