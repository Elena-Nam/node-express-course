const Task = require("../models/tasks")

const getAllTasks = (req, res) => {
    res.send('all items from the file')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = (req, res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req, res)=>{
    res.send('update a task')
}

const deleteTask = (req, res)=>{
    res.send('delete a task')
}


module.exports = {
    getAllTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask,
}