function PageContainer({ children }) {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default PageContainer
