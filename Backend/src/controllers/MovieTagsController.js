/*
  index - GET para listar registros
  show - GET para exibir registro específico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELETE para remover um registro
*/

const knex = require("../database/knex/knex")
const ErrorHandler = require("../utils/ErrorHandler")

class MovieTagsController {
  show = async (req, res) => {
    const { note_id } = req.params
    const { user_id } = req.user

    const movieTags = await this.getTagsFromMovieNote({ note_id, user_id })

    return res.json(movieTags)
  }

  create = async (req, res) => {
    const { note_id, tag_id } = req.body
    const { user_id } = req.user

    await knex("movie_tags").insert({ note_id, tag_id, user_id })
    const movieTags = await this.getTagsFromMovieNote({ note_id, user_id })

    return res.json(movieTags)
  }

  delete = async (req, res) => {
    const { note_id, tag_id } = req.body
    const { user_id } = req.user

    await knex("movie_tags").where({ note_id, tag_id, user_id }).del()
    const movieTags = await this.getTagsFromMovieNote({ note_id, user_id })

    return res.json(movieTags)
  }

  // utils
  getTagsFromMovieNote = async ({ note_id, user_id }) => {
    const movieTagsDb = await knex("movie_tags")
      .where("movie_tags.user_id", user_id)
      .andWhere("movie_tags.note_id", note_id)
      .join("movie_notes", "movie_tags.note_id", "=", "movie_notes.id")
      .join("tags", "movie_tags.tag_id", "=", "tags.id")
      .select("movie_notes.title", "tags.tag")

    if (movieTagsDb.length === 0) {
      throw new ErrorHandler(`No tags found for note ${note_id}!!`)
    }

    const tags = movieTagsDb.map((movieTag) => movieTag.tag)
    const movieTags = { title: movieTagsDb[0].title, tags }
    return movieTags
  }
}

module.exports = MovieTagsController
