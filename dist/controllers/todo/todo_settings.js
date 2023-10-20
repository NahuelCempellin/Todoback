"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.editTodo = exports.todoById = exports.todoByTitle = exports.getTodos = void 0;
const todo_1 = __importDefault(require("../../models/todoModel/todo"));
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { owner } = req.query;
    try {
        const allTodo = yield todo_1.default.find({ owner: owner });
        res.status(200).send(allTodo);
    }
    catch (error) {
        next(error);
    }
});
exports.getTodos = getTodos;
const todoByTitle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.query;
    try {
        const todo = yield todo_1.default.findOne({ title: title });
        if (!todo) {
            res.status(400).send({ message: 'The searched task does not exist...' });
        }
        else {
            res.status(200).send(todo);
        }
    }
    catch (error) {
        next(error);
    }
});
exports.todoByTitle = todoByTitle;
const todoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.query;
    try {
        const todo = yield todo_1.default.findOne({ _id: _id });
        if (!todo) {
            res.status(400).send({ message: 'The searched task does not exist...' });
        }
        else {
            res.status(200).send(todo);
        }
    }
    catch (error) {
        next(error);
    }
});
exports.todoById = todoById;
const editTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.query;
    const { title, state, task } = req.body;
    try {
        const todo = yield todo_1.default.findByIdAndUpdate(_id, { title, state, task }, { new: true });
        res.status(200).send(todo);
    }
    catch (error) {
        next(error);
    }
});
exports.editTodo = editTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.query;
    try {
        const todo = yield todo_1.default.findByIdAndDelete({ _id: _id });
        res.status(200).send({ message: 'Todo deleted successfully...', todo });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTodo = deleteTodo;
