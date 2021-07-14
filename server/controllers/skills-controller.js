const knex = require('../db/db')

//GetAll,Add,Remove,Reset

exports.add = async (req, res) => {
  //check if SKill exists in db
  knex('skills')
    .insert({
      "name": req.body.name,
      "playerId": req.body.playerId
    })
    .then((data) => res.json({ message: `${req.body.name} was added to Skills` }))
    .catch((err) => {
      res.json({ message: `Error adding ${req.body.name} to Skills` })
    })
}
exports.get = async (req, res) => {
  knex.select("*").from("skills").where({"name":req.body.name})
    .then((data) => {
      res.json({message:data})
    })
    .catch((err) => {

      res.json({ message: err });
    })
}

exports.getAll = async (req, res) => {
  knex.select('*').from('skills')
    .then((userData) => {
      res.json(userData)
    })
    .catch((err) => {
      res.json({ 'message': `There was an error retrieving skills: ${err}` })
    })
}
exports.remove = async (req, res) => {
  knex('skills')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Skill ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id}: ${err}` })
    })
}
exports.reset = async (req, res) => {
  knex
    .select('*') // select all records
    .from('skills') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Skills cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting Skills: ${err}.` })
    })
}
