import Sidebar from './Sidebar'
import Header from './Header'

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-app-bg">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
