/*
  index - GET para listar registros
  show - GET para exibir registro específico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELETE para remover um registro
*/

const knex = require("../database/knex/knex")
const ErrorHandler = require("../utils/ErrorHandler")

class MovieNotesController {
  async index(req, res) {
    const { user_id } = req.user

    const movieNotes = await knex("movie_notes").where({ user_id })

    return res.json(movieNotes)
  }

  async show(req, res) {
    const { movie_note_id } = req.params
    const { user_id } = req.user

    const [movieNote] = await knex("movie_notes").where({
      id: movie_note_id,
      user_id,
    })

    return res.json(movieNote)
  }

  async create(req, res) {
    const { title, description, rating } = req.body
    const { user_id } = req.user

    const [movieNoteDb] = await knex("movie_notes").where({ title, user_id })

    if (movieNoteDb) {
      throw new ErrorHandler(`Movie already inserted in database!!`)
    }

    const [movieNote] = await knex("movie_notes").insert(
      {
        title,
        description,
        rating,
        user_id,
      },
      ["title", "rating"]
    )

    return res.json(movieNote)
  }

  async update(req, res) {
    const { title, description, rating } = req.body
    const { user_id } = req.user

    const [movieNoteDb] = await knex("movie_notes").where({ title, user_id })

    if (!movieNoteDb) {
      throw new ErrorHandler(`Movie title ${title} not found!!`)
    }

    const [updatedMovie] = await knex("movie_notes")
      .where({ id: movieNoteDb.id })
      .update({ description, rating }, ["title", "rating"])

    return res.json(updatedMovie)
  }

  async delete(req, res) {
    const { title } = req.body
    const { user_id } = req.user

    const [movieNoteDb] = await knex("movie_notes").where({ title, user_id })

    if (!movieNoteDb) {
      throw new ErrorHandler(`Movie title ${title} not found!!`)
    }
    await knex("movie_notes").where({ id: movieNoteDb.id }).del()

    return res.json({ message: `Movie ${title} successufully deleted!!` })
  }
}

module.exports = MovieNotesController
