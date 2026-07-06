// import React from 'react'
import studentLogo from '../assets/studentlogo.png';
import GLogo from '../assets/GraphLogo.jpg'
import GreenCheck from '../assets/greencheck.png'

const DashBoard = () => {
  return (
    <>
    <div className="p-6">

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white shadow rounded-xl p-4 text-center hover:scale-105 transition duration-300">
          <h2 className="text-gray-600 text-lg font-semibold">Total Students</h2>
          <p className="text-3xl font-bold">100</p>
          <img src={studentLogo} alt="Student Logo" className="mx-auto mt-3 w-12 h-12" />
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-xl p-4 text-center hover:scale-105 transition duration-300">
          <h2 className="text-gray-600 text-lg font-semibold">Average Marks</h2>
          <p className="text-3xl font-bold">85%</p>
          <img src={GLogo} alt="Graph Logo" className="mx-auto mt-3 w-12 h-12" />
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow rounded-xl p-4 text-center hover:scale-105 transition duration-300">
          <h2 className="text-gray-600 text-lg font-semibold">Attendance Rate</h2>
          <p className="text-3xl font-bold">95%</p>
          <img src={GreenCheck} alt="Green Check" className="mx-auto mt-3 w-12 h-12" />
        </div>

      </div>

    </div>

    </>
  )
}

export default DashBoard