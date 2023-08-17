exports.up = async function (knex) {
  await knex.raw(`
    CREATE VIEW v_movie_notes_info AS 
      SELECT
      mn.id AS movie_note_id,
      mn.title AS movie_title,
      mn.description AS movie_description,
      mn.rating AS rating,
      u.id AS user_id,
      u.name AS user_name,
      mn.created_at AS created_at,
      mn.updated_at AS updated_at,
      GROUP_CONCAT(t.tag) AS tags
    FROM 
      movie_notes AS mn
    LEFT JOIN movie_tags AS mt ON mn.id=mt.note_id
    LEFT JOIN tags AS t ON mt.tag_id=t.id
    LEFT JOIN users AS u ON mn.user_id=u.id
    GROUP BY
      mn.id,
      mn.title,
      mn.description,
      mn.rating,
      u.id,
      u.name,
      mn.created_at,
      mn.updated_at
  `)
}

exports.down = async function (knex) {
  await knex.schema.dropView("v_movie_notes_info")
}
