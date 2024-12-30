import db from '../models/taskModel'

export const createTask = (name: string, description: string, status: string) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare("INSERT INTO tasks (name, description, status) VALUES (?, ?, ?)")
    stmt.run([name, description, status], function (err) {
      if (err) reject(err)
      else resolve(this.lastID)
    })
    stmt.finalize()
  })
}

export const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM tasks", (err, rows) => {
      if (err) reject(err)
      else resolve(rows)
    })
  })
}

export const getTaskById = (id: number) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    })
  })
}

export const updateTask = (id: number, name: string, description: string, status: string) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare("UPDATE tasks SET name = ?, description = ?, status = ? WHERE id = ?")
    stmt.run([name, description, status, id], function (err) {
      if (err) reject(err)
      else resolve(this.changes)
    })
    stmt.finalize()
  })
}

export const deleteTask = (id: number) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare("DELETE FROM tasks WHERE id = ?")
    stmt.run([id], function (err) {
      if (err) reject(err)
      else resolve(this.changes)
    })
    stmt.finalize()
  })
}