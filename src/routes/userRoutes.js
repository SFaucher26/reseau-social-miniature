// routes/userRoutes.js
import express from 'express'

import { getUserByIdController, getCurrentUser } from '../controllers/userController.js'
import {requireAuthToken} from '../middlewares/authToken.js'

const router = express.Router()

router.get('/users/current', requireAuthToken, getCurrentUser)
router.get('/users/:id', getUserByIdController)


export default router