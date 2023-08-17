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
    const { title, description, rating, tags } = req.body
    const { user_id } = req.user

    const [movieNoteDb] = await knex("movie_notes").where({ title, user_id })

    if (movieNoteDb) {
      throw new ErrorHandler(`Filme já cadastrado na base de dados!!`)
    }

    const [movieNote] = await knex("movie_notes").insert(
      {
        title,
        description,
        rating,
        user_id,
      },
      ["id", "title", "rating"]
    )

    if (tags && tags.length > 0) {
      const selectedTags = await knex("tags").whereIn("tag", tags)
      const movieTags = selectedTags.map((tag) => {
        return { user_id, note_id: movieNote.id, tag_id: tag.id }
      })

      await knex("movie_tags").insert(movieTags)
    }

    return res.json(movieNote)
  }

  async update(req, res) {
    const { description, rating, tags } = req.body
    const { movie_note_id: id } = req.params
    const { user_id } = req.user

    const [movieNoteDb] = await knex("movie_notes").where({ id, user_id })

    if (!movieNoteDb) {
      throw new ErrorHandler(`Filme de id ${id} não encontrado!!`)
    }

    const [updatedMovie] = await knex("movie_notes")
      .where({ id, user_id })
      .update({ description, rating }, ["id", "title", "rating"])

    if (tags && tags.length > 0) {
      await knex("movie_tags").where({ note_id: id, user_id }).del()

      const selectedTags = await knex("tags").whereIn("tag", tags)
      const movieTags = selectedTags.map((tag) => {
        return { user_id, note_id: id, tag_id: tag.id }
      })

      await knex("movie_tags").insert(movieTags)
    }

    return res.json(updatedMovie)
  }

  async delete(req, res) {
    const { id } = req.body
    const { user_id } = req.user

    const [movieNoteDb] = await knex("movie_notes").where({ id, user_id })

    if (!movieNoteDb) {
      throw new ErrorHandler(`Filme de id ${id} não encontrado!!`)
    }
    await knex("movie_notes").where({ id, user_id }).del()

    return res.json({
      message: `Movie note de id: ${id} deletado com sucesso!!`,
    })
  }
}

module.exports = MovieNotesController
