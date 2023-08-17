const { Router } = require("express")

const MovieNotesInfoController = require("../controllers/MovieNotesInfoController")
const movieNotesInfoController = new MovieNotesInfoController()

const movieNotesInfoRouter = Router()

movieNotesInfoRouter.get("/by_user", movieNotesInfoController.indexUser)
movieNotesInfoRouter.get("/:movie_note_id", movieNotesInfoController.index)

module.exports = movieNotesInfoRouter
