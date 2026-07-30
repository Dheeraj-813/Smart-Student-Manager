import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {

    const token = localStorage.getItem('token');

  return (
    token ? <Outlet /> : <Navigate to="/LoginForm" replace /> // If token exists, render the child routes (Outlet), otherwise redirect to login page
  );
} 

export default ProtectedRoute;