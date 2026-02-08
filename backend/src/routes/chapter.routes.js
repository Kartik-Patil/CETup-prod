import express from 'express'
import {
  getChaptersBySubject,
  createChapter
} from '../controllers/chapter.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/:subjectId', protect, getChaptersBySubject)
router.post('/', protect, createChapter)

export default router