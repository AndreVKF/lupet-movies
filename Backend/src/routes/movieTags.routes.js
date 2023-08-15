const { Router } = require("express")

const MovieTagsController = require("../controllers/MovieTagsController")
const movieTagsController = new MovieTagsController()

const movieTagsRouter = Router()

movieTagsRouter.get("/:note_id", movieTagsController.show)
movieTagsRouter.post("/", movieTagsController.create)
movieTagsRouter.delete("/", movieTagsController.delete)

module.exports = movieTagsRouter
