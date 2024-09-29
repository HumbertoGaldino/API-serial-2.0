exports.up = function (knex) {
  return knex.schema.createTable("castTvShows", function (table) {
    table.increments("id").primary().notNullable();
    
    table.integer("id_user").unsigned().notNullable();
    table.foreign("id_user").references("id").inTable("users");
    
    table.integer("idTvShow").notNullable();
    table.string("original_name").notNullable();
    table.text("overview", "medium");
    table.string("poster_path");
    table.date("first_air_date").notNullable();
    table.boolean("isFavorite");
    table.integer("episode_run_time");

    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("castTvShows");
};
