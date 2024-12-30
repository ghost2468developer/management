import express, { Request, Response } from 'express'
import taskRoutes from './routes/taskRoutes'

const app = express()
const port = 3000

app.use(express.json()) // For parsing application/json
app.use(taskRoutes) // Register routes

app.get('/', (req: Request, res: Response) => {
  res.send('Server up and running 😉😉')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
