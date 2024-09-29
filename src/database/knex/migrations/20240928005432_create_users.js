exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary().notNullable();
    table.string("name");
    table.string("email").notNullable().unique();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.string("imgProfile");
    table.string("imgBackground");

    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
