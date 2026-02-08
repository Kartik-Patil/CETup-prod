import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password
    })
    login(res.data.token, res.data.user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  )
}