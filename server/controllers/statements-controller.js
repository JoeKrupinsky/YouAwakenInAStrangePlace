const knex = require('../db/db')

//GetAll,Add,Remove,Reset

exports.add = async (req, res) => {
  knex('statements')
    .insert({
      'worldId':req.body.worldId,
      "text":req.body.text
    })
    .then((data) => res.json({ message: `Statement ${data[0]} was added` }))
    .catch((err) => {
      res.json({ message: `Error adding statement ` })
    })
}
exports.addMultiple = async (req,res) => {
  knex.batchInsert('statements',req.body.statements)
  .then((data)=>{res.json(data)})
  .catch((err)=>{res.json({message:err})})
}
exports.get = async (req, res) => {
  knex('statements')
    .where({ 'id': req.body.id })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving statement: ${err}`})
    })
}
exports.getAll = async (req, res) => {
  knex.select('*').from('statements')
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json({ 'message': `There was an error retrieving statements: ${err}` })
    })
}
exports.remove = async (req, res) => {
  knex('statements')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `statement ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id}: ${err}` })
    })
}
exports.reset = async (req, res) => {
  knex
    .select('*') // select all records
    .from('statements') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Statements cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting Statements: ${err}.` })
    })
}
exports.update = async (req, res) => {
    knex('statements')
        .where({ "id": req.body.id })
        .update({
            text:req.body.text
        })
        .then(() => {
            // Send a success message in response
            res.json({ message: `Statement ${req.body.id} updated` })
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error updating statement: ${err}.` })
        })
}

