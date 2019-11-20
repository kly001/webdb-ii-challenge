
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN:'12345678', Make:'Toyota', Model:'Camry', Mileage:'333555'},
        {VIN:'23456789', Make:'Ford', Model:'Festiva', Mileage:'1000000'},
      ]);
    });
};

