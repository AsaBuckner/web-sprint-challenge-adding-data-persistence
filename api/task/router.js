// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')


const router = express.Router()


// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

router.post("/", (req, res, next)=>{
    Task.add(req.body)
    .then(task =>{
        res.status(200).json(task)
    })
})


// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`


router.get("/", (req, res, next)=>{
    Task.findAll()
    .then(task =>{
        res.status(200).json(task)
    })
})


router.get("/:id", (req, res, next)=>{
    Task.Find(req.params.id)
    .then(task =>{
        res.status(200).json(task)
    })
})




module.exports= router