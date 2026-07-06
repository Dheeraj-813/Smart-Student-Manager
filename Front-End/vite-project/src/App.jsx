import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import PublicLayout from './Layouts/PublicLayout';
import Student from './Pages/Student';
import DashBoardLayout from './Layouts/DashBoardLayout';
import AddStudent from './Pages/AddStudent';
import DashBoard from './Pages/DashBoard';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          {/* Public Pages */}
          <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          </Route>

          {/* Dashboard Pages */}
          <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="Student" element={<Student />} />
          <Route path='AddStudent' element={<AddStudent/>}/>
          <Route path='DashBoard' element={<DashBoard/>}/>
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
