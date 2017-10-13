
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('track').del()
    .then(function () {
      // Inserts seed entries
      return knex('track').insert([
        {id: 1, name: 'Strawberry Fields', artist_id: 1},
        {id: 2, name: 'Soft Bulletin', artist_id: 2}
      ]);
    });
};
