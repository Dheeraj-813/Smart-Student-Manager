import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

function RoleBasedRoute({ allowedRoles }) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/LoginForm" />
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/access-denied" />
  }

  return (
    <Outlet />
  )
}

export default RoleBasedRoute