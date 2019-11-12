
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'rowValue1',password:1234},
        {id: 2, username: 'rowValue2',password:1234},
        {id: 3, username: 'rowValue3',password:1234}
      ]);
    });
};
