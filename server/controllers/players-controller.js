// Import database
const knex = require('../db/db')

exports.getAll = async (req, res) => {
  knex
    .select('*') // select all records
    .from('players')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving players: ${err}` })
    })
}

exports.add = async (req, res) => {
  knex('players')
    .insert({ 
      'name': req.body.name,
      'description': req.body.description,
      'health': 10,
      'resources': 5
    })
    .then((data) => {
      // Send a success message in response
      res.json({ message: `Player ${req.body.name} created.`,id:data[0] })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.name} player: ${err}` })
    })
}

exports.remove = async (req, res) => {
  knex('players')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Player ${req.body.name} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} player: ${err}` })
    })
}


exports.reset = async (req, res) => {
  knex
    .select('*') // select all records
    .from('players') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Player list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting player list: ${err}.` })
    })
}
