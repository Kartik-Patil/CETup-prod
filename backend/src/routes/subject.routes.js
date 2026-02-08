import express from 'express'
import { getSubjects, createSubject } from '../controllers/subject.controller.js'
import { protect } from '../middleware/auth.middleware.js'
import { adminOnly } from '../middleware/admin.middleware.js'

const router = express.Router()

router.get('/', protect, getSubjects)

// ADMIN ONLY
router.post('/', protect, adminOnly, createSubject)

export default router