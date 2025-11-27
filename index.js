// movie-app/index.js 

const express = require("express");
const movieRouter = require("./routes/movie"); 

const app = express();
const port = 3000;

app.use(express.json());

// Use movie router starting with movie
app.use("/movies", movieRouter);


app.listen (port,()=> {
   
    console.log(`Server is running at app http://localhost:${port}`); 
});