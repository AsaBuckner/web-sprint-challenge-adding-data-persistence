// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')


const router = express.Router()


// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

router.post("/", (req, res, next)=>{
    if(!req.body.task_completed){
        req.body.task_completed = 0
    }
    if(!req.body.task_description || !req.body.project_id ){
        res.status(400).json("missing description and/or project_id")
    }else{
    Task.add(req.body)
    .then(task =>{
        if(task.project_completed = null){
            res.status(400).json("missing project id")
        }
        const mapTask = { ...task, task_completed: task.task_completed ? true : false }
        res.status(200).json(mapTask)
    })
    .catch(err =>{
        res.status(500).json({message: `somethings up: ${err}`})
    })}
})


// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`


router.get("/", (req, res, next)=>{
        Task.findAll()
    .then(tasks =>{
      const mapTasks = tasks.map(task => ({ ...task, task_completed: task.task_completed = !!task.task_completed}))
      console.log(mapTasks)
      res.status(200).json(mapTasks)
    })
    .catch(err =>{
        res.status(500).json({message: `somethings up: ${err}`})
    })
})


router.get("/:id", (req, res, next)=>{
    Task.Find(req.params.id)
    .then(task =>{
        res.status(200).json(task)
    })
})




module.exports= router