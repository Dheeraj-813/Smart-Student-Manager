import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function ProtectedRoute() {

    // const token = localStorage.getItem('token');
    const { token } = useAuth(); // Use the useAuth hook to access the token from AuthContext

  return (
    token ? <Outlet /> : <Navigate to="/LoginForm" replace /> // If token exists, render the child routes (Outlet), otherwise redirect to login page
  );
} 

export default ProtectedRoute;