const yargs = require ("yargs");
const { sequelize } = require("./db/connection")
const { addMovie, listMovies } = require("./movie/function")

const app = async (yargsObject) => {
    try {
        await sequelize.sync()
        if (yargsObject.create) {
            await addMovie({title: yargsObject.title, actor: yargsObject.actor});
            console.log(await listMovies());
        } else if (yargsObject.read) {
            console.log(await listMovies())
        } else {
            console.log("incorrect command")
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv)