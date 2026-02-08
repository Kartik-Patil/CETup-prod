import PageContainer from '../components/Layout/PageContainer'
import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.replace('/login')
  }

  return (
    <PageContainer>
      <div className="bg-white p-8 rounded-xl shadow-md max-w-xl">
        <h2 className="text-2xl font-bold mb-2">{user?.name}</h2>
        <p className="text-text-muted">{user?.email}</p>
        <p className="capitalize mb-6">Role: {user?.role}</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-3 rounded"
        >
          Logout
        </button>
      </div>
    </PageContainer>
  )
}

