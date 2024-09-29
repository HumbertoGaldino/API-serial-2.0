exports.up = function (knex) {
  return knex.schema.createTable("Genres", function (table) {
    table.increments("id").primary().notNullable();
    table.integer("id_genre_api").notNullable();

    table.integer("id_user").unsigned().notNullable();
    table.foreign("id_user").references("id").inTable("users");

    table.integer("id_tvshow").unsigned().notNullable();
    table.foreign("id_tvshow").references("id").inTable("castTvShows");

    table.string("name").notNullable();

    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("Genres");
};
