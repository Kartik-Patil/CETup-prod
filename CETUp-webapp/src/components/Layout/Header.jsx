import { useLocation, Link } from 'react-router-dom'
import { BellIcon } from './Icons'
import logo from '../../assests_/images/cetup_logo-removebg-preview.png'

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/learn': 'Learn',
  '/practice': 'Practice',
  '/profile': 'Profile',
}

const navigation = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Learn', path: '/learn' },
  { name: 'Practice', path: '/practice' },
  { name: 'Profile', path: '/profile' },
]

function Header() {
  const location = useLocation()
  const pageTitle = pageTitles[location.pathname] || 'CETUp'

  return (
    <>
    <header className="bg-white border-b border-border h-20 flex items-center justify-between pl-8 pr-8 sticky top-0 z-10">
      <div>
        <img src={logo} alt="CETUp Logo" className="h-16 w-auto" />
      </div>
      
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button className="p-3 rounded-lg hover:bg-app-bg transition-colors relative">
          <BellIcon className="w-7 h-7 text-text-muted" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-accent-orange rounded-full"></span>
        </button>

        {/* User Info */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-base font-medium text-text-primary">Student Name</p>
            <p className="text-sm text-text-muted">CET Aspirant</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary-blue flex items-center justify-center text-white font-medium text-lg">
            S
          </div>
        </div>
      </div>
    </header>
    
    {/* Navigation Bar */}
    <nav className="bg-white border-b border-border px-8 py-4 sticky top-20 z-10">
      <div className="flex items-center space-x-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-primary-blue text-white shadow-md'
                  : 'text-slate-700 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </nav>
    </>
  )
}

export default Header
