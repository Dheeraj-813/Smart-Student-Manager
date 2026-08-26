import Header from "../Components/Header"
import { Outlet } from "react-router-dom"
import SideBar from '../Components/SideBar'
import { useState } from "react"

const DashBoardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024); // State to manage sidebar visibility

  return (
    
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <SideBar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      {/* Right Section */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>

    </div>
    
  )
}

export default DashBoardLayout