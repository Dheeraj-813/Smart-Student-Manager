import {Link} from 'react-router-dom';
import studentsCap from '../assets/students-cap.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const SideBar = () => {
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
        <div className="h-screen w-64 bg-blue-900 text-white flex flex-col p-5">
      
      {/* Logo / Title */}
      <img className="w-[25px] h-[25px] flex" src={studentsCap} alt="logo" />
      <h1 className="text-1xl font-bold mb-8">
        <Link to="/">
        Smart Student Manager
        </Link>
      </h1>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard/DashBoard" className="hover:bg-blue-700 p-2 rounded">
          Dashboard
        </Link>

        <Link to="/dashboard/Student" className="hover:bg-blue-700 p-2 rounded">
          Students
        </Link>

        <Link to="/dashboard/AddStudent" className="hover:bg-blue-700 p-2 rounded">
          Add Student
        </Link>

        <Link to="/reports" className="hover:bg-blue-700 p-2 rounded">
          Reports
        </Link>
      </nav>

      {/* Bottom Section (Optional) */}
      <div className="mt-auto">
        <button className="w-full bg-red-500 p-2 rounded hover:bg-red-600" onClick={handleLogout}>
          Logout
        </button>
      </div>

    </div>
  )
}

export default SideBar