// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')


const router = express.Router()

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`


// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// router.post("/", (req, res, next)=>{
//     Resource.add(req.body)
//     .then(resource =>{
//         res.status(200).json(resource)
//     })
// })


// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`


router.get("/", (req, res, next)=>{
    Resource.findAll()
    .then(resource =>{
        res.status(200).json(resource)
    })
})


router.get("/:id", (req, res, next)=>{
    Resource.Find(req.params.id)
    .then(resource =>{
        res.status(200).json(resource)
    })
})



router.post("/", (req, res, next)=>{
    if(!req.body.resource_name){
        res.status(400).json("missing name")
    }
    Resource.add(req.body)
    .then(resource =>{
        res.status(200).json(resource)
    })
    .catch(err =>{
        res.status(500).json({message: `somethings up: ${err}`})
    })
})

module.exports= router