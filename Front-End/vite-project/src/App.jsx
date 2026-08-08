import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import PublicLayout from './Layouts/PublicLayout';
import Student from './Pages/Student';
import DashBoardLayout from './Layouts/DashBoardLayout';
import AddStudent from './Pages/AddStudent';
import DashBoard from './Pages/DashBoard';
import AdminLoginPage from './Pages/AdminLoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import EditStudent from './Pages/EditStudent';

function App() {
  

  return (
    <>
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
          </Route>
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
