import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import PublicLayout from './Layouts/PublicLayout';
import Student from './Pages/Student';
import DashBoardLayout from './Layouts/DashBoardLayout';
import StudentReportLayout from './Layouts/StudentReportLayout';
import AddStudent from './Pages/AddStudent';
import DashBoard from './Pages/DashBoard';
import AdminLoginPage from './Pages/AdminLoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import EditStudent from './Pages/EditStudent';
import StudentReport from './Components/StudentReport';
import { AuthProvider } from './Context/AuthContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Report from './Pages/Report';
import RoleBasedRoute from './Routes/RoleBasedRoute';
import AccessDenied from './Pages/AccessDenied';

function App() {
  
  return (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            {/* Public Pages */}
            <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            </Route>

            {/* Login Page */}
            <Route path="/LoginForm" element={<AdminLoginPage />} />

            {/* Dashboard Pages */}
            <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route path="Student" element={<Student />} />
            <Route path='AddStudent' element={<AddStudent/>}/>
            <Route path='DashBoard' element={<DashBoard/>}/>
            <Route path='EditStudent/:id' element={<EditStudent/>}/>

            {/* Role-Based Access */}
             <Route element={<RoleBasedRoute allowedRoles={["admin", "teacher"]} />}>
            <Route path="reports" element={<Report />} />
            </Route>

            </Route>
            </Route>

            {/* Student Report Pages */}
            <Route element={<ProtectedRoute />}>
            <Route path="/dashboard/StudentReport" element={<StudentReportLayout />}>
            <Route path=":id" element={<StudentReport />} />
            </Route>
            </Route>

            <Route path="/access-denied" element={<AccessDenied />} />

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer   
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        />
      </BrowserRouter>
    </AuthProvider>
  </>
  )
}

export default App
