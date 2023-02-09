// build your `Task` model here
const db = require('../../data/dbConfig.js')

module.exports = {
    Find,
    add,
    findAll
}


function Find (task_id) {
return db('tasks')
    .where({task_id}).first()
}


function findAll() {
    return db('tasks')
      .select("tasks.*", "projects.project_name", "projects.project_description")
      .leftJoin("projects", "tasks.project_id", "projects.project_id");
  }


function add (task) {
    return db('tasks')
        .insert(task)
        .then((res) => Find(res[0]))
}

