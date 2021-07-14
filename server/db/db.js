// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, './database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})


knex.schema

  .hasTable('players')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('players', (table)  => {
          table.increments('id').primary()
          table.string('name')
          table.string('description')
          table.integer('health')
          table.integer('resources')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Players\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Log all data in table
knex.select('*').from('players')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex