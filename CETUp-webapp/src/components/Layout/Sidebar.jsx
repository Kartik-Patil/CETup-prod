import { Link, useLocation } from 'react-router-dom'
import {
  HomeIcon,
  BookOpenIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from './Icons'

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: HomeIcon },
  { name: 'Learn', path: '/learn', icon: BookOpenIcon },
  { name: 'Practice', path: '/practice', icon: PencilSquareIcon },
  { name: 'Profile', path: '/profile', icon: UserCircleIcon },
]

function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-white border-r border-border h-screen p-6">
      <h2 className="text-2xl font-bold text-primary-blue mb-8">CETUp</h2>

      <nav className="space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.path
          const Icon = item.icon

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all ${
                isActive
                  ? 'bg-primary-blue text-white'
                  : 'text-text-primary hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar