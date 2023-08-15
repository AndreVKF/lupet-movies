exports.up = function (knex) {
  return knex.schema.createTable("movie_notes", (table) => {
    table.increments("id")
    table.text("title").unique().notNullable()
    table.text("description").notNullable()
    table.integer("rating").notNullable().checkBetween([0, 5])

    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")

    table.timestamp("created_at").defaultTo(knex.fn.now())
    table.timestamp("updated_at").defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("movie_notes")
}
