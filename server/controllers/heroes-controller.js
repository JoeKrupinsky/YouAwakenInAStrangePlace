const knex = require('../db/db')

//CURRENTLY UNUSED
//API CONTROLLER FOR A 'HALL OF HEROES' FEATURE
exports.add = async (req, res) => {
  knex('heroes')
    .insert({
      "name": req.body.name,
      'description': req.body.description,
      "epilogue": req.body.epilogue
    })
    .then((data) => res.json({ message: `${req.body.name} was added to Hall of Heroes` }))
    .catch((err) => {
      res.json({ message: `Error adding ${req.body.name} to Hall of Heroes` })
    })
}
exports.get = async (req, res) => {
  knex('heroes')
    .where({ 'id': req.body.id })
    .then(userData => {
      res.json(worldData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving hero: ${err}`})
    })
}
exports.getAll = async (req, res) => {
  knex.select('*').from('heroes')
    .then((userData) => {
      res.json(userData)
    })
    .catch((err) => {
      res.json({ 'message': `There was an error retrieving heroes: ${err}` })
    })
}
exports.remove = async (req, res) => {
  knex('heroes')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Hero ${req.body.name} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id}: ${err}` })
    })
}
exports.reset = async (req, res) => {
  knex
    .select('*') // select all records
    .from('heroes') // from 'heroes' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Hall of Heroes cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting Hall of Heroes: ${err}.` })
    })
}
exports.update = async (req, res) => {
  knex('heroes')
      .where({ "id": req.body.id })
      .update({
          name:req.body.name,
          description:req.body.description,
          epilogue:req.body.epilogue
      })
      .then(() => {
          // Send a success message in response
          res.json({ message: `Hero ${req.body.id} updated` })
      })
      .catch(err => {
          // Send a error message in response
          res.json({ message: `There was an error updating Hero: ${err}.` })
      })
}
