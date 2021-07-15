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

//PLAYERS TABLE
knex.schema
  .hasTable('players')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('players', (table) => {
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
          console.error(`There was an error creating Players table: ${error}`)
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
//SKILLS TABLE
knex.schema
  .hasTable('skills')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('skills', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.integer('playerId')

      })
        .then(() => {
          // Log success message
          console.log('Table \'Skills\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating Skills table: ${error}`)
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

  //WORLDS TABLE
  knex.schema
  .hasTable('worlds')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('worlds', (table) => {
        table.increments('id').primary()
        table.string('genre')
        table.string('adjective')
        table.string('location')
      })
        .then(() => {
          // Log success message
          console.log('Table \'Worlds\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating Worlds table: ${error}`)
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
//STATEMENTS TABLE
knex.schema
  .hasTable('statements')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('statements', (table) => {
        table.increments('id').primary()
        table.integer('worldId')
        table.string('text')
      })
        .then(() => {
          // Log success message
          console.log('Table \'Statements\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating Statements table: ${error}`)
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
//HALL OF HEROES TABLE
knex.schema
  .hasTable('heroes')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('heroes', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('description')
        table.string('epilogue')
      })
        .then(() => {
          // Log success message
          console.log('Table \'Hall Of Heroes\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating Hall of Heroes table: ${error}`)
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
// Export the database


module.exports = knex