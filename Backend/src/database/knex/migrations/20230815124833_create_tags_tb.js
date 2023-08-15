const { TAGS } = require("../../../utils/Data")

exports.up = async function (knex) {
  await knex.schema.createTable("tags", (table) => {
    table.increments("id")
    table.text("tag").notNullable().unique()
  })

  const movieTags = TAGS.map((tag) => {
    return { tag }
  })

  await knex("tags").insert(movieTags)

  return
}

exports.down = function (knex) {
  return knex.schema.dropTable("tags")
}
