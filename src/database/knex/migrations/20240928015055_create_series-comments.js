exports.up = function (knex) {
  return knex.schema.createTable("SeriesComments", function (table) {
    table.increments("id").primary().notNullable();

    table.integer("id_user").unsigned().notNullable();
    table.foreign("id_user").references("id").inTable("users");

    table.integer("idTvShow").notNullable();
    table.integer("season").notNullable();
    table.text("comment").notNullable();

    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("SeriesComments");
};
