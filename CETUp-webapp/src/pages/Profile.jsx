import { useState } from 'react'
import PageContainer from '../components/Layout/PageContainer'
import { useAuth } from '../context/AuthContext'

function Profile() {
  const { user, logout } = useAuth()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const confirmLogout = () => {
    logout()
    window.location.href = '/login'
  }

  return (
    <PageContainer>
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl p-8 text-white mb-8">
        <h2 className="text-3xl font-bold">{user?.name}</h2>
        <p className="opacity-90">{user?.email}</p>
        <p className="opacity-80 capitalize">Role: {user?.role}</p>
      </div>

      {/* Actions */}
      <div className="bg-white rounded-xl shadow-md border border-border p-6 max-w-md">
        <button
          onClick={() => setShowLogoutModal(true)}
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-medium"
        >
          Logout
        </button>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96">
            <h3 className="text-xl font-bold mb-4">Confirm Logout</h3>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 border py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg"
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

export default Profile