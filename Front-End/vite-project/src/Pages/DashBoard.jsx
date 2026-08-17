// import React from 'react'
import studentLogo from '../assets/studentlogo.png';
import GLogo from '../assets/GraphLogo.jpg'
import GreenCheck from '../assets/greencheck.png'
import { useState, useEffect } from 'react';
import { getAllStudents } from '../Services/StudentService';
import { toast } from 'react-toastify';
import StudentCharts from '../Components/StudentCharts';
import TopPerformer from '../Components/TopPerformer';
import RecentStudent from '../Components/RecentStudent';

const DashBoard = () => {

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState('')

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await getAllStudents();
        if (response.success) {
          setStudents(response.data);
        } else {
          setError("Unable to load students...!");
          toast.error("Unable to load students...!");
        }
      } catch (error) {
        console.error(error);
        setError(error.userMessage || "Something went wrong.");
        toast.error("Something went wrong.");
      }
      finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const totalStudents = students.length;

  let averageMarks = 0;
  let attendanceRate = 95;

  if (students.length > 0) {
    const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
    averageMarks = totalMarks / students.length;

    // const totalAttendance = students.reduce((sum, student) => sum + student.attendance, 0);
    // attendanceRate = (totalAttendance / (students.length * 100)) * 100;
  }

  if (loading) {
    return (
      <h2 className="text-center mt-10">
        Loading dashboard...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-center mt-10 text-red-600">
        {error}
      </h2>
    );
  }

  return (
    <>
    <div className="p-6">

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white shadow rounded-xl p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-gray-600 text-center text-lg font-semibold">Total Students</h2>
          <p className="text-3xl text-center font-bold">{totalStudents}</p>
          <img src={studentLogo} alt="Student Logo" className="mx-auto mt-3 w-12 h-12" />
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-xl p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-gray-600 text-center text-lg font-semibold">Average Marks</h2>
          <p className="text-3xl text-center font-bold">{averageMarks.toFixed(2)}%</p>
          <img src={GLogo} alt="Graph Logo" className="mx-auto mt-3 w-12 h-12" />
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow rounded-xl p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-gray-600 text-center text-lg font-semibold">Attendance Rate</h2>
          <p className="text-3xl text-center font-bold">{attendanceRate.toFixed(2)}%</p>
          <img src={GreenCheck} alt="Green Check" className="mx-auto mt-3 w-12 h-12" />
        </div>

      </div>

      <div className="mt-10">
        <StudentCharts students={students} />
      </div>

      <div className="mt-10">
        <TopPerformer students={students} />
      </div>

      <div className="mt-10">
        <RecentStudent students={students} />
      </div>

    </div>

    </>
  )
}

export default DashBoard