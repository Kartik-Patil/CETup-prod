import { useState } from 'react'
import PageContainer from '../components/Layout/PageContainer'

// Mock student data
const studentProfile = {
  name: 'Priya Sharma',
  email: 'priya.sharma@email.com',
  phone: '+91 98765 43210',
  class: 'PU-2',
  cetYear: '2026',
  selectedSubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
  avatar: 'P',
}

// Performance data
const performanceData = {
  totalQuizzes: 47,
  averageAccuracy: 85,
  questionsAttempted: 1250,
  studyHours: 156,
  currentStreak: 12,
  rank: 245,
}

function Profile() {
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [language, setLanguage] = useState('english')
  const [studyGoal, setStudyGoal] = useState('2')

  const handleLogout = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = () => {
    // In production, this would handle actual logout
    alert('Logged out successfully!')
    setShowLogoutModal(false)
  }

  return (
    <PageContainer>
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl shadow-lg p-8 text-white mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full bg-white text-primary-blue flex items-center justify-center text-4xl font-bold shadow-lg">
              {studentProfile.avatar}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">{studentProfile.name}</h2>
              <p className="text-lg opacity-90 mb-1">Class {studentProfile.class} • CET {studentProfile.cetYear}</p>
              <p className="text-sm opacity-80">📧 {studentProfile.email}</p>
              <p className="text-sm opacity-80">📱 {studentProfile.phone}</p>
            </div>
          </div>
          <button className="bg-white text-primary-blue px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Basic Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Selected Subjects */}
          <div className="bg-white rounded-xl shadow-md border border-border p-6">
            <h3 className="text-lg font-semibold text-primary-blue mb-4">Selected Subjects</h3>
            <div className="grid grid-cols-2 gap-3">
              {studentProfile.selectedSubjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 border-2 border-border rounded-lg"
                >
                  <div className="w-10 h-10 bg-primary-blue text-white rounded-lg flex items-center justify-center font-bold">
                    {subject[0]}
                  </div>
                  <span className="font-medium text-text-primary">{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-xl shadow-md border border-border p-6">
            <h3 className="text-lg font-semibold text-primary-blue mb-4">Performance Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <PerformanceCard
                icon="📝"
                label="Total Quizzes"
                value={performanceData.totalQuizzes}
                color="bg-primary-blue"
              />
              <PerformanceCard
                icon="🎯"
                label="Avg Accuracy"
                value={`${performanceData.averageAccuracy}%`}
                color="bg-success-green"
              />
              <PerformanceCard
                icon="❓"
                label="Questions"
                value={performanceData.questionsAttempted}
                color="bg-accent-orange"
              />
              <PerformanceCard
                icon="⏰"
                label="Study Hours"
                value={performanceData.studyHours}
                color="bg-secondary-blue"
              />
              <PerformanceCard
                icon="🔥"
                label="Current Streak"
                value={`${performanceData.currentStreak} days`}
                color="bg-red-500"
              />
              <PerformanceCard
                icon="🏆"
                label="Current Rank"
                value={`#${performanceData.rank}`}
                color="bg-purple-500"
              />
            </div>
          </div>

          {/* Settings Section */}
          <div className="bg-white rounded-xl shadow-md border border-border p-6">
            <h3 className="text-lg font-semibold text-primary-blue mb-4">Settings</h3>
            <div className="space-y-6">
              {/* Language Preference */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Language Preference
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-3 border-2 border-border rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                >
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="kannada">Kannada</option>
                  <option value="tamil">Tamil</option>
                  <option value="telugu">Telugu</option>
                </select>
              </div>

              {/* Study Goal */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Daily Study Goal (hours)
                </label>
                <select
                  value={studyGoal}
                  onChange={(e) => setStudyGoal(e.target.value)}
                  className="w-full p-3 border-2 border-border rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                >
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4 hours</option>
                  <option value="5">5+ hours</option>
                </select>
              </div>

              {/* Notification Settings */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Notification Preferences
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-5 h-5 text-primary-blue focus:ring-primary-blue rounded"
                    />
                    <span className="ml-3 text-text-primary">Daily study reminders</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-5 h-5 text-primary-blue focus:ring-primary-blue rounded"
                    />
                    <span className="ml-3 text-text-primary">Quiz performance updates</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-primary-blue focus:ring-primary-blue rounded"
                    />
                    <span className="ml-3 text-text-primary">Weekly progress reports</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-primary-blue text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Save Settings
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Quick Stats & Actions */}
        <div className="space-y-6">
          {/* Study Stats */}
          <div className="bg-white rounded-xl shadow-md border border-border p-6">
            <h3 className="text-lg font-semibold text-primary-blue mb-4">Study Stats</h3>
            <div className="space-y-4">
              <StatItem label="Joined" value="Jan 2026" icon="📅" />
              <StatItem label="Total Points" value="12,450" icon="⭐" />
              <StatItem label="Badges Earned" value="8" icon="🏅" />
              <StatItem label="Chapters Done" value="28/45" icon="📚" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md border border-border p-6">
            <h3 className="text-lg font-semibold text-primary-blue mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 p-3 border-2 border-border rounded-lg hover:border-primary-blue hover:bg-blue-50 transition-all">
                <span>📊</span>
                <span className="font-medium text-text-primary">View Analytics</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 p-3 border-2 border-border rounded-lg hover:border-primary-blue hover:bg-blue-50 transition-all">
                <span>📥</span>
                <span className="font-medium text-text-primary">Download Reports</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 p-3 border-2 border-border rounded-lg hover:border-primary-blue hover:bg-blue-50 transition-all">
                <span>❓</span>
                <span className="font-medium text-text-primary">Help & Support</span>
              </button>
            </div>
          </div>

          {/* Logout Button */}
          <div className="bg-white rounded-xl shadow-md border border-border p-6">
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👋</div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Confirm Logout</h3>
              <p className="text-text-muted">Are you sure you want to logout from CETUp?</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 px-6 py-3 border-2 border-border text-text-primary rounded-lg hover:border-primary-blue transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
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

function PerformanceCard({ icon, label, value, color }) {
  return (
    <div className="text-center p-4 bg-app-bg rounded-lg border border-border">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-sm text-text-muted mb-1">{label}</p>
      <p className={`text-xl font-bold text-white px-3 py-1 rounded ${color}`}>{value}</p>
    </div>
  )
}

function StatItem({ label, value, icon }) {
  return (
    <div className="flex items-center justify-between p-3 bg-app-bg rounded-lg">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{icon}</span>
        <span className="text-text-primary font-medium">{label}</span>
      </div>
      <span className="text-primary-blue font-bold">{value}</span>
    </div>
  )
}

export default Profile
