"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_create_1 = require("../../controllers/todo/todo_create");
const todo_settings_1 = require("../../controllers/todo/todo_settings");
const router = express_1.default.Router();
router.post('/newtask', todo_create_1.CreateTodo);
router.get('/todos', todo_settings_1.getTodos);
router.get('/todotitle', todo_settings_1.todoByTitle);
router.get('/todoId', todo_settings_1.todoById);
router.put('/task', todo_settings_1.editTodo);
router.delete('/delete', todo_settings_1.deleteTodo);
exports.default = router;
