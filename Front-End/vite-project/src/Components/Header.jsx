const Header = ({ sidebarOpen, setSidebarOpen }) => {

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-blue-500 text-white shadow-md border-b border-gray-200 sticky top-0 z-40">

        {/* Left Section */}
        <div className="flex items-center gap-3">

          {/* Sidebar Toggle Button */}
          <button
            onClick={handleSidebarToggle}
            className="text-2xl p-1 rounded hover:bg-blue-600 transition"
            aria-label="Toggle sidebar"
          >
            ☰
          </button>

          {/* Logo / Title */}
          <div className="text-2xl font-bold">
            Student Record System
          </div>

        </div>

      </div>
    </div>
  )
}

export default Header