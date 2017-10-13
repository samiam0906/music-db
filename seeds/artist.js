
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      // Inserts seed entries
      return knex('artist').insert([
        {id: 1, name: 'The Beatles'},
        {id: 2, name: 'The Flaming Lips'}
      ]);
    });
};
