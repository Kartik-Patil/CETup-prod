import express from 'express'
import {
  getChaptersBySubject,
  createChapter
} from '../controllers/chapter.controller.js'
import { protect } from '../middleware/auth.middleware.js'
import { adminOnly } from '../middleware/admin.middleware.js'

const router = express.Router()

router.get('/:subjectId', protect, getChaptersBySubject)

// ADMIN ONLY
router.post('/', protect, adminOnly, createChapter)

export default router