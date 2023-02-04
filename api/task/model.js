// build your `Task` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    Find,
    add,
    findAll
}


function Find (task_id) {
return db('tasks')
    .where({task_id})
}


function findAll() {
    return db('tasks')
    }


function add (task) {
    return db('tasks')
        .insert(task)
        .then((res) => Find(res[0]))
}

