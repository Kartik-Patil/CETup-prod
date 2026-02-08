import { useState } from 'react'
import PageContainer from '../components/Layout/PageContainer'
import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, logout } = useAuth()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const confirmLogout = () => {
    logout()
    window.location.href = '/login'
  }

  return (
    <PageContainer>
      <div className="bg-white p-8 rounded-xl shadow-md max-w-xl">
        <h2 className="text-2xl font-bold mb-2">{user?.name}</h2>
        <p className="text-text-muted">{user?.email}</p>
        <p className="capitalize mb-6">Role: {user?.role}</p>

        <button
          onClick={() => setShowLogoutModal(true)}
          className="bg-red-500 text-white px-6 py-3 rounded"
        >
          Logout
        </button>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h3 className="text-xl font-bold mb-4">Confirm Logout</h3>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 border py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 bg-red-500 text-white py-2 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  )
}