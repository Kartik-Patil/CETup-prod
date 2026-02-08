import PageContainer from '../components/Layout/PageContainer'
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts'

// Mock data
const studentData = {
  name: 'Priya Sharma',
  class: 'PU-2',
  greeting: 'Welcome back!'
}

// Subject-wise accuracy data
const subjectAccuracy = [
  { subject: 'Physics', accuracy: 85, color: '#2563EB' },
  { subject: 'Chemistry', accuracy: 78, color: '#60A5FA' },
  { subject: 'Maths', accuracy: 92, color: '#22C55E' },
  { subject: 'Biology', accuracy: 88, color: '#F59E0B' },
]

// Quiz performance by difficulty
const difficultyData = [
  { name: 'Easy', value: 45, color: '#22C55E' },
  { name: 'Medium', value: 35, color: '#F59E0B' },
  { name: 'Hard', value: 20, color: '#2563EB' },
]

// Chapters progress data
const chaptersProgress = {
  completed: 28,
  total: 45,
}

// What we offer cards data
const offerings = [
  {
    id: 1,
    title: 'Chapter-wise Synopsis PDFs',
    description: 'Comprehensive study materials for all subjects',
    icon: '📚',
    color: 'bg-primary-blue',
  },
  {
    id: 2,
    title: 'Subject-wise Quizzes',
    description: 'Test your knowledge with targeted quizzes',
    icon: '📝',
    color: 'bg-success-green',
  },
  {
    id: 3,
    title: 'Performance Analytics',
    description: 'Track your progress and improve',
    icon: '📊',
    color: 'bg-accent-orange',
  },
  {
    id: 4,
    title: 'Difficulty-based Practice',
    description: 'Gradually increase challenge level',
    icon: '🎯',
    color: 'bg-secondary-blue',
  },
]

function Dashboard() {
  const progressPercentage = Math.round((chaptersProgress.completed / chaptersProgress.total) * 100)

  return (
    <PageContainer>
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl shadow-lg p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{studentData.greeting}</h2>
            <p className="text-xl opacity-90">{studentData.name}</p>
            <p className="text-lg opacity-80 mt-1">Class: {studentData.class}</p>
          </div>
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl">
            👋
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary-blue mb-6">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offer) => (
            <OfferingCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>

      {/* Performance Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary-blue mb-6">Your Performance</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Subject-wise Accuracy Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-border p-6">
            <h4 className="text-lg font-semibold text-text-primary mb-4">Subject-wise Accuracy</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectAccuracy}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="subject" stroke="#64748B" />
                <YAxis stroke="#64748B" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px' 
                  }}
                  formatter={(value) => [`${value}%`, 'Accuracy']}
                />
                <Bar dataKey="accuracy" radius={[8, 8, 0, 0]}>
                  {subjectAccuracy.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Quiz Performance by Difficulty */}
          <div className="bg-white rounded-xl shadow-md border border-border p-6">
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quiz Difficulty Split</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={difficultyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {difficultyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px' 
                  }}
                  formatter={(value) => [`${value}%`, 'Quizzes']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {difficultyData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-text-primary">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-text-primary">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chapters Progress Indicator */}
        <div className="bg-white rounded-xl shadow-md border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-text-primary">Chapters Progress</h4>
            <span className="text-2xl font-bold text-primary-blue">{progressPercentage}%</span>
          </div>
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div 
                className="bg-gradient-to-r from-success-green to-primary-blue h-6 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              >
                <span className="text-white text-sm font-semibold">
                  {chaptersProgress.completed} / {chaptersProgress.total}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-text-muted">
            <span>Chapters Completed</span>
            <span>{chaptersProgress.total - chaptersProgress.completed} remaining</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickStatCard
          icon="🎯"
          title="Total Quizzes Taken"
          value="47"
          subtitle="This month"
          bgColor="bg-primary-blue"
        />
        <QuickStatCard
          icon="⭐"
          title="Average Score"
          value="85%"
          subtitle="+5% from last month"
          bgColor="bg-success-green"
        />
        <QuickStatCard
          icon="🔥"
          title="Current Streak"
          value="12 days"
          subtitle="Keep it up!"
          bgColor="bg-accent-orange"
        />
      </div>
    </PageContainer>
  )
}

function OfferingCard({ offer }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className={`${offer.color} w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4`}>
        {offer.icon}
      </div>
      <h4 className="text-lg font-semibold text-text-primary mb-2">{offer.title}</h4>
      <p className="text-sm text-text-muted">{offer.description}</p>
    </div>
  )
}

function QuickStatCard({ icon, title, value, subtitle, bgColor }) {
  return (
    <div className={`${bgColor} rounded-xl shadow-md p-6 text-white`}>
      <div className="text-4xl mb-3">{icon}</div>
      <p className="text-sm opacity-90 mb-1">{title}</p>
      <p className="text-3xl font-bold mb-2">{value}</p>
      <p className="text-sm opacity-80">{subtitle}</p>
    </div>
  )
}

export default Dashboard
