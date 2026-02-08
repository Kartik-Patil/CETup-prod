import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, BookOpenIcon, PencilSquareIcon, UserCircleIcon } from './Icons'

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: HomeIcon },
  { name: 'Learn', path: '/learn', icon: BookOpenIcon },
  { name: 'Practice', path: '/practice', icon: PencilSquareIcon },
  { name: 'Profile', path: '/profile', icon: UserCircleIcon },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-white border-r h-screen p-6">
      <h2 className="text-2xl font-bold text-primary-blue mb-8">CETUp</h2>

      <nav className="space-y-2">
        {navigation.map(({ name, path, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              location.pathname === path
                ? 'bg-primary-blue text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}