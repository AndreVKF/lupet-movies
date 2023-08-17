/* 
  index - GET para listar registros
  show - GET para exibir registro específico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELETE para remover um registro
*/

const knex = require("../database/knex/knex")
const ErrorHandler = require("../utils/ErrorHandler")

class MovieNotesInfoController {
  constructor() {
    this.tbName = "v_movie_notes_info"
  }

  indexUser = async (req, res) => {
    const { user_id } = req.user
    const movieNotesInfo = await knex(this.tbName).where({ user_id })

    return res.json(movieNotesInfo)
  }

  index = async (req, res) => {
    const { user_id } = req.user
    const { movie_note_id } = req.params

    const [movieNoteInfo] = await knex(this.tbName).where({
      user_id,
      movie_note_id,
    })

    return res.json(movieNoteInfo)
  }
}

module.exports = MovieNotesInfoController
