import express from 'express'
import { CreateTodo } from '../../controllers/todo/todo_create'
import { getTodos, todoByTitle, editTodo, deleteTodo, todoById } from '../../controllers/todo/todo_settings'

const router = express.Router()

router.post('/newtask',CreateTodo)
router.get('/todos', getTodos)
router.get('/todotitle', todoByTitle )
router.get('/todoId', todoById)
router.put('/task', editTodo)
router.delete('/delete', deleteTodo)

export default router