exports.up = function (knex, Promise) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments("id");
      tbl.string("name").unique().notNullable();
    })
    .createTable("users", (tbl) => {
      tbl.uuid("id")
      tbl.string("username", 128).primary().notNullable().unique();
      // .index()
      tbl.string("password", 256).notNullable();
      tbl.string("email", 256).notNullable();
      tbl.string("role").notNullable().references("name").inTable("roles");
    })
    .createTable("posts", (tbl) => {
      tbl.increments("id");
      tbl.string("title").notNullable();
      tbl.string("post").notNullable();
      tbl.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
      tbl.string("author").notNullable()
        .references("username")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists("posts")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
