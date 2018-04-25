const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: 'localhost',
    user: 'grant',
    password: null,
    database: 'rex'
  }
});

knex.schema
  .createTable('books', table => {
    table.increments();
    table.string('title').unique();
    table.string('url');
    table.string('thumbnail_url');
    table.text('description');
    table.float('rating');
  })
  .createTable('users', table => {
    table.increments();
    table.string('username').unique();
    table.string('password');
    table.string('first_name');
    table.string('last_name');
  })
  .then(done => {
    console.log('done: ' + done);
  })
  .catch(err => {
    console.log(err);
  });
