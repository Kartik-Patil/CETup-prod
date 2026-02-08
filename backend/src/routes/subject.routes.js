import express from 'express'
import { getSubjects, createSubject } from '../controllers/subject.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/', protect, getSubjects)
router.post('/', protect, createSubject) // admin-only later

export default router