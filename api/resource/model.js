// build your `Resource` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    Find,
    add,
    findAll
}


function Find (resource_id) {
return db('resources')
    .where({resource_id}).first()
}


function findAll() {
    return db('resources')
    }


function add (project) {
    return db('resources')
        .insert(project)
        .then((res) => Find(res[0]))
}

