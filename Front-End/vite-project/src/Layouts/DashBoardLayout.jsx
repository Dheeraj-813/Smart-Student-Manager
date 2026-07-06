import Header from "../Components/Header"
import { Outlet } from "react-router-dom"
import SideBar from '../Components/SideBar'

const DashBoardLayout = () => {
  return (
    
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <SideBar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>

    </div>
    
  )
}

export default DashBoardLayout