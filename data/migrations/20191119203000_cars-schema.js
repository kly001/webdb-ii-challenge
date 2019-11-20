exports.up = function(knex) {
    return knex.schema.createTable('cars', function(tbl) {
        tbl.increments();
        tbl.integer('VIN').unique().notNullable();
        tbl.string('Make').notNullable();
        tbl.string('Model').notNullable();
        tbl.integer('Mileage').notNullable();
        tbl.string('Transmission_Type');
        tbl.string('Title_Status');
    })
  
};

exports.down = function(knex) {
  returnknex.schema.dropTableIfExists('cars')
};
