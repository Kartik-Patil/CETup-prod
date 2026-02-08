import { useEffect, useState } from 'react'
import PageContainer from '../components/Layout/PageContainer'
import api from '../services/api'

function Learn() {
  const [subjects, setSubjects] = useState([])
  const [chapters, setChapters] = useState([])
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Fetch subjects
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        setLoading(true)
        const res = await api.get('/subjects')
        setSubjects(res.data)
      } catch {
        setError('Failed to load subjects')
      } finally {
        setLoading(false)
      }
    }
    fetchSubjects()
  }, [])

  // Fetch chapters when subject selected
  const handleSubjectClick = async (subject) => {
    try {
      setSelectedSubject(subject)
      setLoading(true)
      const res = await api.get(`/chapters/${subject.id}`)
      setChapters(res.data)
    } catch {
      setError('Failed to load chapters')
    } finally {
      setLoading(false)
    }
  }

  // SUBJECT LIST
  if (!selectedSubject) {
    return (
      <PageContainer>
        <h3 className="text-2xl font-bold text-primary-blue mb-6">
          Choose a Subject
        </h3>

        {loading && <p>Loading subjects...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() => handleSubjectClick(subject)}
              className="bg-primary-blue text-white p-8 rounded-xl cursor-pointer hover:opacity-90"
            >
              <h4 className="text-xl font-bold">{subject.name}</h4>
              <p className="text-sm opacity-90">{subject.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    )
  }

  // CHAPTER LIST
  return (
    <PageContainer>
      <button
        onClick={() => setSelectedSubject(null)}
        className="mb-6 text-primary-blue font-medium"
      >
        ← Back to Subjects
      </button>

      <h3 className="text-2xl font-bold text-primary-blue mb-4">
        {selectedSubject.name} Chapters
      </h3>

      {loading && <p>Loading chapters...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="bg-white rounded-xl shadow-md border p-6 space-y-3">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            <p className="font-semibold">
              Chapter {chapter.chapter_order}: {chapter.name}
            </p>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}

export default Learn