"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTaskById = exports.getAllTasks = exports.createTask = void 0;
const taskModel_1 = __importDefault(require("../models/taskModel"));
const createTask = (name, description, status) => {
    return new Promise((resolve, reject) => {
        const stmt = taskModel_1.default.prepare("INSERT INTO tasks (name, description, status) VALUES (?, ?, ?)");
        stmt.run([name, description, status], function (err) {
            if (err)
                reject(err);
            else
                resolve(this.lastID);
        });
        stmt.finalize();
    });
};
exports.createTask = createTask;
const getAllTasks = () => {
    return new Promise((resolve, reject) => {
        taskModel_1.default.all("SELECT * FROM tasks", (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
};
exports.getAllTasks = getAllTasks;
const getTaskById = (id) => {
    return new Promise((resolve, reject) => {
        taskModel_1.default.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row) => {
            if (err)
                reject(err);
            else
                resolve(row);
        });
    });
};
exports.getTaskById = getTaskById;
const updateTask = (id, name, description, status) => {
    return new Promise((resolve, reject) => {
        const stmt = taskModel_1.default.prepare("UPDATE tasks SET name = ?, description = ?, status = ? WHERE id = ?");
        stmt.run([name, description, status, id], function (err) {
            if (err)
                reject(err);
            else
                resolve(this.changes);
        });
        stmt.finalize();
    });
};
exports.updateTask = updateTask;
const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        const stmt = taskModel_1.default.prepare("DELETE FROM tasks WHERE id = ?");
        stmt.run([id], function (err) {
            if (err)
                reject(err);
            else
                resolve(this.changes);
        });
        stmt.finalize();
    });
};
exports.deleteTask = deleteTask;
