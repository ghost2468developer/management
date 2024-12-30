"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json()); // For parsing application/json
app.use(taskRoutes_1.default); // Register routes
app.get('/', (req, res) => {
    res.send('Server up and running 😉😉');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
