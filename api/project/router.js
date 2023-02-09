// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')


const router = express.Router()


// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

router.post("/", (req, res, next)=>{
    
    if(!req.body.project_completed){
        req.body.project_completed = 0
    }
    Project.add(req.body)
    .then(project =>{
        const mapProject = { ...project, project_completed: project.project_completed ? true : false }
        res.status(200).json(mapProject)
    })
    .catch(err =>{
        res.status(500).json({message: `somethings up: ${err}`})
    })
});

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`


router.get("/", (req, res, next)=>{

    Project.findAll()
    .then(projects =>{
      const mappedProjects = projects.map(project => ({ ...project, project_completed: project.project_completed ? true : false }))
      res.status(200).json(mappedProjects)
    })
    .catch(err =>{
        res.status(500).json({message: `somethings up: ${err}`})
    })
});


router.get("/:id", (req, res, next)=>{
    Project.Find(req.params.id)
    .then(project =>{
        const mapProject= { ...project, project_completed: project.project_completed ? true : false }
        res.status(200).json(mapProject)
    })
    .catch(err =>{
        res.status(500).json({ message: `somethings up: ${err}` })
    })
});




module.exports= router