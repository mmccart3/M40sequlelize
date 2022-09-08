const Movie = require("./table")

exports.addMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject);
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.findAll();
    } catch (error) {
        console.log(error);
    }
}