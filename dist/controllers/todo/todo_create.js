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
exports.CreateTodo = void 0;
const todo_1 = __importDefault(require("../../models/todoModel/todo"));
const CreateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, task, owner, category } = req.body;
    try {
        const todo = new todo_1.default({
            title: title,
            task: task,
            state: 'pending',
            owner: owner,
            category: category
        });
        yield todo.save();
        res.status(200).send({ message: 'Task created successfuly!' });
    }
    catch (error) {
        next(error);
    }
});
exports.CreateTodo = CreateTodo;
