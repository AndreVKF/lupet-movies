const { Router } = require("express")

const MovieNotesController = require("../controllers/MovieNotesController")
const movieNotesController = new MovieNotesController()

const movieNotesRouter = Router()

movieNotesRouter.get("/", movieNotesController.index)
movieNotesRouter.get("/:movie_note_id", movieNotesController.show)
movieNotesRouter.post("/", movieNotesController.create)
movieNotesRouter.put("/", movieNotesController.update)
movieNotesRouter.delete("/", movieNotesController.delete)

module.exports = movieNotesRouter
