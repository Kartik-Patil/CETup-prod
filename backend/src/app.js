import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import subjectRoutes from './routes/subject.routes.js'
import chapterRoutes from './routes/chapter.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/subjects', subjectRoutes)
app.use('/api/chapters', chapterRoutes)

export default app