import db from '../config/db.js'

// GET all subjects
export const getSubjects = async (req, res) => {
  const [rows] = await db.query(
    'SELECT id, name, description FROM subjects ORDER BY id'
  )
  res.json(rows)
}

// CREATE subject (admin later)
export const createSubject = async (req, res) => {
  const { name, description } = req.body

  if (!name)
    return res.status(400).json({ message: 'Subject name required' })

  await db.query(
    'INSERT INTO subjects (name, description) VALUES (?, ?)',
    [name, description]
  )

  res.status(201).json({ message: 'Subject created' })
}