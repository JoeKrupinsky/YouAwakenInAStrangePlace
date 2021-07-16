const knex = require('../db/db')

exports.wipeEverything=async(req,res)=>{
    //DELETE ALL INFO FROM TABLES
    knex.select('*').from('players').truncate().then(data=>{res.json(data)}).catch(error=>{res.json(error)})
    knex.select('*').from('worlds').truncate().then(data=>{res.json(data)}).catch(error=>{res.json(error)})
    knex.select('*').from('statements').truncate().then(data=>{res.json(data)}).catch(error=>{res.json(error)})
    knex.select('*').from('skills').truncate().then(data=>{res.json(data)}).catch(error=>{res.json(error)})
};
