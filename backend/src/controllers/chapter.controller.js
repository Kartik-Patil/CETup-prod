import db from '../config/db.js'

// GET chapters by subject
export const getChaptersBySubject = async (req, res) => {
  const { subjectId } = req.params

  const [rows] = await db.query(
    `SELECT id, name, chapter_order 
     FROM chapters 
     WHERE subject_id = ? 
     ORDER BY chapter_order`,
    [subjectId]
  )

  res.json(rows)
}

// CREATE chapter
export const createChapter = async (req, res) => {
  const { subject_id, name, chapter_order } = req.body

  if (!subject_id || !name)
    return res.status(400).json({ message: 'Missing fields' })

  await db.query(
    'INSERT INTO chapters (subject_id, name, chapter_order) VALUES (?, ?, ?)',
    [subject_id, name, chapter_order || 0]
  )

  res.status(201).json({ message: 'Chapter created' })
}