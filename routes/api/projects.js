const express = require('express');
const router = express.Router();

const Project = require('../../models/Project');

// GET 
// Get project and associated data
// Access limited to authenticated user's data

router.get('/', (req, res) => {
    Project.find()
           .sort({status: 'asc'})
           .then(projects => res.json(projects));
});

// POST
// Create a new project

router.post('/', (req, res) => {
    const newProject = new Project({
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        description: req.body.description,
        status: req.body.status,
        deployment: req.body.deployment,
        repo: req.body.repo,

    });

    newProject.save()
              .then(project => res.json(project));
});
// DELETE
// Delete an existing project

router.delete('/:id', (req, res) => {
    Project.findById(req.params.id)
            .then(project => project.remove()
                .then(() => res.json({success: true})))
                .catch(err => res.status(404).json({success: false}));
});

// UPDATE 
// Edit data related to a project

router.put('/:id', (req, res) => {
    Project.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            .then(() => res.json({success: true}))
            .catch(err => res.status(404).json({success: false}));
});

module.exports = router;