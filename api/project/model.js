// build your `Project` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    Find,
    add,
    findAll
}


function Find (project_id) {
return db('projects')
    .where({project_id}).first()
}


function findAll() {
    return db('projects')
    }


function add (project) {
    return db('projects')
        .insert(project)
        .then((res) => Find(res[0]))
}

