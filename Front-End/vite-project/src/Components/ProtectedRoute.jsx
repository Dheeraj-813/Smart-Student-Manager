import { Navigate } from 'react-router-dom';

function ProtectedRoute() {

    const token = localStorage.getItem('token');

  return (
    token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
  )
}

export default ProtectedRoute

