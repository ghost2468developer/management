import express, { Request, Response } from 'express'
import taskRoutes from './routes/taskRoutes'

const app = express()
const port = 3000

app.use(express.json()) // For parsing application/json
app.use(taskRoutes) // Register routes

app.get('/', (req: Request, res: Response) => {
  res.send(`
    Welcome to the Task Management API Server! 🚀

    Your server is up and running successfully on port 3000. 

    This API provides endpoints to manage tasks and their statuses. 
    You can use the available routes to create, update, delete, and fetch tasks.

    Key Features:
    - Full CRUD operations for tasks
    - Easy-to-use RESTful API
    - Handles JSON data for smooth communication

    To start interacting with the server:
    - Use the "/tasks" route to manage your tasks
    - Send GET requests to retrieve tasks
    - Use POST, PUT, and DELETE requests to modify task data

    Feel free to explore the routes defined in the server and enjoy managing your tasks efficiently!

    Happy Coding! 😎
  `)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
