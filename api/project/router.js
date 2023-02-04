// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')


const router = express.Router()


// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

router.post("/", (req, res, next)=>{
    Project.add(req.body)
    .then(project =>{
        res.status(200).json(project)
    })
});

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`


router.get("/", (req, res, next)=>{
    Project.findAll()
    .then(project =>{
        project = project.map(project => {
            if (project.project_completed === 0) {
               return {...project, project_completed : false};
            } else {
                return {...project, project_completed : true};;
            }
        });
        res.status(200).json(project)
    })
});


router.get("/:id", (req, res, next)=>{
    Project.Find(req.params.id)
    .then(project =>{
        project = project.map(project => {
            if (project.project_completed === 0) {
               return {...project, project_completed : false};
            } else {
                return {...project, project_completed : true};;
            }
        })
        res.status(200).json(project)
    })
});




module.exports= router