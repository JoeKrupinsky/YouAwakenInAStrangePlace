// Import database
const knex = require('../db/db')

exports.get = async (req, res) => {
    knex('worlds')
        .where({ 'id': req.body.id })
        .then(worldData => {
            res.json(worldData)
        })
        .catch(err => {
            res.json({ message: `There was an error retrieving world: ${err}` })
        })
}
exports.getAll = async (req, res) => {
    knex
        .select('*') // select all records
        .from('worlds')
        .then(worldData => {
            res.json(worldData)
        })
        .catch(err => {
            res.json({ message: `There was an error retrieving worlds: ${err}` })
        })
}

exports.add = async (req, res) => {
    knex('worlds')
        .insert({
            'genre': req.body.genre,
            'adjective': req.body.adjective,
            'location': req.body.location
        })
        .then((data) => {
            // Send a success message in response
            res.json({ message: `World created.`,res:data})
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error creating world: ${err}` })
        })
}

exports.remove = async (req, res) => {
    knex('worlds')
        .where({ 'id': req.body.id }) // find correct record based on id
        .del() // delete the record
        .then(() => {
            // Send a success message in response
            res.json({ message: `World ${req.body.id} deleted.` })
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error deleting world: ${err}` })
        })
}


exports.reset = async (req, res) => {
    knex
        .select('*') // select all records
        .from('worlds') // from 'books' table
        .truncate() // remove the selection
        .then(() => {
            // Send a success message in response
            res.json({ message: 'World list cleared.' })
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error resetting world list: ${err}.` })
        })
}
exports.update = async (req, res) => {
    knex('worlds')
        .where({ "id": req.body.id })
        .update({
            genre: req.body.genre,
            adjective: req.body.adjective,
            location: req.body.location
        })
        .then(() => {
            // Send a success message in response
            res.json({ message: `World ${req.body.id} updated` })
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error updating world: ${err}.` })
        })
}
