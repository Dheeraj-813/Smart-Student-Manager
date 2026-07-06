
function Header() {
  return (
    <div>
        {/* Top Bar */}
        <div className="flex justify-between items-center px-6 py-4 bg-blue-500 text-white shadow-md border-b border-gray-200 sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center space-x-3 text-2xl font-bold">
                Student Record System
            </div>
        </div>
    </div>
  )
}

export default Header;