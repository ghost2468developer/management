import express from 'express'
import * as taskService from '../services/taskService'

const router = express.Router()

// Create a task
router.post('/tasks', async (req, res) => {
  const { name, description, status } = req.body
  try {
    const taskId = await taskService.createTask(name, description, status)
    res.status(201).json({ id: taskId })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks()
    res.status(200).json(tasks)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Get a task by ID
router.get('/tasks/:id', async (req, res) => {
  const { id } = req.params
  try {
    const task = await taskService.getTaskById(Number(id))
    if (task) res.status(200).json(task)
    else res.status(404).json({ message: 'Task not found' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Update a task
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params
  const { name, description, status } = req.body
  try {
    const updated = await taskService.updateTask(Number(id), name, description, status);
    if (updated) res.status(200).json({ message: 'Task updated' })
    else res.status(404).json({ message: 'Task not found' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await taskService.deleteTask(Number(id))
    if (deleted) res.status(200).json({ message: 'Task deleted' })
    else res.status(404).json({ message: 'Task not found' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router