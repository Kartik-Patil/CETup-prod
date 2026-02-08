import { useState } from 'react'
import PageContainer from '../components/Layout/PageContainer'
import api from '../services/api'

export default function Admin() {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [msg, setMsg] = useState('')

  const createSubject = async () => {
    try {
      await api.post('/subjects', { name, description: desc })
      setMsg('Subject created')
      setName('')
      setDesc('')
    } catch {
      setMsg('Only admin can do this')
    }
  }

  return (
    <PageContainer>
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      <div className="bg-white p-6 rounded shadow max-w-md">
        <input
          className="border p-2 w-full mb-3"
          placeholder="Subject name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={createSubject}
          className="bg-primary-blue text-white px-4 py-2 rounded"
        >
          Create Subject
        </button>

        {msg && <p className="mt-3">{msg}</p>}
      </div>
    </PageContainer>
  )
}