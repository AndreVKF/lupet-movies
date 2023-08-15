exports.up = async function (knex) {
  await knex.schema.createTable("movie_tags", (table) => {
    table.increments("id")
    table
      .integer("note_id")
      .references("id")
      .inTable("movie_notes")
      .onDelete("CASCADE")
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
    table.integer("tag_id").references("id").inTable("tags").onDelete("CASCADE")
  })

  await knex.schema.alterTable("movie_tags", (table) => {
    table.unique(["note_id", "user_id", "tag_id"])
  })

  return
}

exports.down = function (knex) {
  return knex.schema.dropTable("movie_tags")
}
