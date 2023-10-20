import express from 'express'
const router = express.Router()
import { createUser } from '../../controllers/users/user_create'
import { login } from '../../controllers/users/user_create'

router.post('/signout', createUser)
router.post('/signin', login)


export default router