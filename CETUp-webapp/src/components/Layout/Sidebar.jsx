import { Link, useLocation } from 'react-router-dom'
import { 
  HomeIcon, 
  BookOpenIcon, 
  PencilSquareIcon, 
  UserCircleIcon 
} from './Icons'

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: HomeIcon },
  { name: 'Learn', path: '/learn', icon: BookOpenIcon },
  { name: 'Practice', path: '/practice', icon: PencilSquareIcon },
  { name: 'Profile', path: '/profile', icon: UserCircleIcon },
]

function Sidebar() {
  const location = useLocation()

  return null
}

export default Sidebar
