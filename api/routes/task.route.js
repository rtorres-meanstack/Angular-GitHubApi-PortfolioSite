const express = require('express');
const app = express();
const taskRoutes = express.Router();

let Task = require('../models/Task');

taskRoutes.route('/create').post (function (req, res){
    let task = new Task(req.body);
    task.save()
        .then(task => {
            res.status(200).json({'task': 'task added in successfully'});
        })
        .catch(err => {
            res.status(400).send('unable to save to database');
        });
});

taskRoutes.route('/').get(function (req, res){
    Task.find(function (err, tasks){
        if(err){
            console.log(err);
        }
        else {
            res.json(tasks);
        }
    });
});

taskRoutes.route('/update/:id').get(function (req, res){
    let id = req.params.id;
    Task.findById(id, function(err, task){
        res.json(task);
    })
})
taskRoutes.route('/change/:id').post(function (req, res){
    Task.findById(req.params.id, function(err, task){
        if(!task)
            return next(new Error('Could not load Document'));
        else{
            task.task_name = req.body.task_name;
            task.task_description = req.body.task_description;
            task.task_timeToComplete = req.body.task_timeToComplete;
            task.task_necessaryItems = req.body.task_necessaryItems;

            task.save().then(task => {
                res.json('Update Complete');
            })
            .catch(err => {
                res.status(400).send("Unable to update the database");    
            });
        }
    });
});

taskRoutes.route('/delete/:id').get(function (req, res){
    Task.findByIdAndRemove({_id: req.params.id}, function(err, task){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = taskRoutes;