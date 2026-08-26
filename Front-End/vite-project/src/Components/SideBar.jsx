import {Link} from 'react-router-dom';
import studentsCap from '../assets/students-cap.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  
  // Use the useAuth hook to access the logout function from AuthContext
  const { logout } = useAuth();

  const handleLogout = () => {
    // Clear any authentication tokens or user data here if needed
    // For example: localStorage.removeItem('authToken');
    // localStorage.removeItem('token'); // Example of clearing a token
    
     // Use the useAuth hook to access the logout function from AuthContext
    logout(); // Call the logout function from AuthContext

    // Navigate to the login page
    navigate('/LoginForm', { replace: true });
  }

  return (
        <div className={`
        fixed lg:sticky
        top-0 left-0
        z-50
        h-screen
        bg-blue-900 text-white
        flex flex-col
        p-5
        shrink-0
        transition-all duration-300 ease-in-out

        /* Desktop width */
        ${sidebarOpen ? 'lg:w-64' : 'lg:w-20'}

        /* Mobile open/close */
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}

        /* Mobile width */
        w-64
      `}>
      
      {/* Logo / Title */}
      <div className="flex items-center justify-between mb-8">

      {/* Logo + Title */}
      <Link to="/" className="flex items-center min-w-0">

        <img
          className="w-[25px] h-[25px] shrink-0"
          src={studentsCap}
          alt="logo"
        />

        {sidebarOpen && (
          <h1 className="text-xl font-bold ml-3 leading-tight break-words">
            Smart Student Manager
          </h1>
        )}
      </Link> 
      {/* Close Button - Mobile */}
      <button
        onClick={() => setSidebarOpen(false)}
        className="lg:hidden ml-2 shrink-0 w-8 h-8 flex items-center justify-center text-xl rounded hover:bg-blue-700"
        aria-label="Close sidebar"
      >
        ✕
      </button>

      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard/DashBoard" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
        <span>🏠</span>
         {sidebarOpen && (
            <span className="ml-3">
              Dashboard
            </span>
          )}
        </Link>

        <Link to="/dashboard/Student" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <span>👨‍🎓</span>
          {sidebarOpen && (
            <span className="ml-3">
              Students
            </span>
          )}
        </Link>

        <Link to="/dashboard/AddStudent" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <span>➕</span>
          {sidebarOpen && (
            <span className="ml-3">
              Add Student
            </span>
          )}
        </Link>

        <Link to="/reports" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <span>📊</span>
          {sidebarOpen && (
            <span className="ml-3">
              Reports
            </span>
          )}
        </Link>
      </nav>

      {/* Bottom Section (Optional) */}
      <div className="mt-auto">
        <button className="w-full bg-red-500 p-2 rounded hover:bg-red-600" onClick={handleLogout}>
          <span>🚪</span>
          {sidebarOpen && (
            <span className="ml-3">
              Logout
            </span>
          )}
        </button>
      </div>

    </div>
  )
}

export default SideBar


