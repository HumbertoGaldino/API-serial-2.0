exports.up = function (knex) {
  return knex.schema.createTable("Episodes", function (table) {
    table.increments("id").primary().notNullable();

    table.integer("id_tvshow").unsigned().notNullable();
    table.foreign("id_tvshow").references("id").inTable("castTvShows");

    table.integer("id_user").unsigned().notNullable();
    table.foreign("id_user").references("id").inTable("users");

    table.integer("idTvShow").notNullable();
    table.integer("season").notNullable();
    table.integer("idEpisodes").notNullable();
    table.integer("episode_number").notNullable();
    table.string("name");
    table.boolean("isNext");

    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("Episodes");
};
