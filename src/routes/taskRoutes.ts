import express from 'express'
import * as taskService from '../services/taskService'

const router = express.Router()

// Create a task
router.post('/tasks', async (req, res) => {
  const { name, description, status } = req.body
    const taskId = await taskService.createTask(name, description, status)
    res.status(201).json({ id: taskId })
})

// Get all tasks
router.get('/tasks', async (req, res) => {
    const tasks = await taskService.getAllTasks()
    res.status(200).json(tasks)
})

// Get a task by ID
router.get('/tasks/:id', async (req, res) => {
  const { id } = req.params
    const task = await taskService.getTaskById(Number(id))
    if (task) res.status(200).json(task)
    else res.status(404).json({ message: 'Task not found' })
})

// Update a task
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params
  const { name, description, status } = req.body
    const updated = await taskService.updateTask(Number(id), name, description, status);
    if (updated) res.status(200).json({ message: 'Task updated' })
    else res.status(404).json({ message: 'Task not found' })
})

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params
    const deleted = await taskService.deleteTask(Number(id))
    if (deleted) res.status(200).json({ message: 'Task deleted' })
    else res.status(404).json({ message: 'Task not found' })
})

export default router