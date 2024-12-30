import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./database.db')

// Create the tasks table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL
  )`)
})

export default db