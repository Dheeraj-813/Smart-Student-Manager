import { useState, useEffect } from "react";
import { getAllStudents, getMyReport } from "../Services/StudentService";
import studentLogo from "../Assets/studentLogo.png";
import GLogo from "../Assets/GraphLogo.jpg";
import GreenCheck from "../Assets/GreenCheck.png";
import TopPerformerImg from "../Assets/TopPerformer.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Report = () => {
  const { user } = useAuth();

  const [search, setSearch] = useState("");

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [selectedCourse, setSelectedCourse] = useState("All");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const getGrade = (marks) => {
    if (marks >= 90)
      return (
        <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">
          A+
        </span>
      );
    if (marks >= 80)
      return (
        <span className="px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-700">
          A
        </span>
      );
    if (marks >= 70)
      return (
        <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-700">
          B+
        </span>
      );
    if (marks >= 60)
      return (
        <span className="px-3 py-1 rounded-full text-sm font-bold bg-orange-100 text-orange-700">
          B
        </span>
      );
    if (marks >= 50)
      return (
        <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-700">
          C
        </span>
      );
    if (marks >= 35)
      return (
        <span className="px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-gray-700">
          D
        </span>
      );
    return (
      <span className="px-3 py-1 rounded-full text-sm font-bold bg-gray-100 text-red-700">
        F
      </span>
    );
  };

  const getResult = (marks) => {
    return marks >= 35 ? (
      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
        ✓ Pass
      </span>
    ) : (
      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700">
        ✕ Fail
      </span>
    );
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCourse =
      selectedCourse === "All" || student.course === selectedCourse;

    return matchesSearch && matchesCourse;
  });

  const totalStudents = filteredStudents.length;

  const averageMarks =
    filteredStudents.length > 0
      ? filteredStudents.reduce((total, student) => total + student.marks, 0) /
        filteredStudents.length
      : 0;

  const topPerformer =
    filteredStudents.length > 0
      ? filteredStudents.reduce((top, student) =>
          student.marks > top.marks ? student : top,
        )
      : null;

  const passedStudents = filteredStudents.filter(
    (student) => student.marks >= 35,
  ).length;

  const passRate =
    filteredStudents.length > 0
      ? (passedStudents / filteredStudents.length) * 100
      : 0;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setError("");

        let response;

        if (user?.role === "student") {
          response = await getMyReport();

          if (response.success && response.data) {
            // The API returns one student's record.
            setStudents([response.data]);
          } else {
            setStudents([]);
            setError("Unable to load your report.");
          }
        } else if (user?.role === "admin" || user?.role === "teacher") {
          response = await getAllStudents();

          if (response.success) {
            setStudents(response.data);
          } else {
            setStudents([]);
            setError("Unable to load student reports.");
          }
        } else {
          setStudents([]);
          setError("You are not authorized to view these reports.");
        }
      } catch (error) {
        console.error(error);
        setStudents([]);
        setError(
          error.userMessage || "Something went wrong while loading reports.",
        );
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchStudents();
    }
  }, [user]);

  if (loading) {
    return <h2 className="text-center mt-10">Loading students...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-10 text-red-600">{error}</h2>;
  }

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Student Performance Report
        </h1>
      </div>

      <div className="flex justify-between gap-4 w-full mb-4">
        {/* Report Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-300 rounded-md p-4 bg-gray-100 mb-6 gap-4 w-full">
          <input
            type="text"
            placeholder="Search students..."
            onChange={handleSearch}
            value={search}
            className="w-full sm:flex-1 h-[45px] px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={selectedCourse}
            onChange={handleCourseChange}
            className="w-full sm:flex-1 h-[45px] px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Courses</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="MCOM">MCOM</option>
            <option value="MSC IT">MSC IT</option>
            <option value="BSCIT">BSCIT</option>
            <option value="MSC">MSC</option>
            <option value="BCOM">BCOM</option>
          </select>
        </div>
      </div>

      {/* Cards Container */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-white shadow rounded-xl p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-gray-600 text-center text-lg font-semibold">
            Total Students
          </h2>
          <img
            src={studentLogo}
            alt="Student Logo"
            className="mx-auto mt-3 w-12 h-12"
          />
          <p className="text-3xl text-center font-bold">{totalStudents}</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-xl p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-gray-600 text-center text-lg font-semibold">
            Average Marks
          </h2>
          <img
            src={GLogo}
            alt="Graph Logo"
            className="mx-auto mt-3 w-12 h-12"
          />
          <p className="text-3xl text-center font-bold">
            {averageMarks.toFixed(2)}
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow rounded-xl p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-gray-600 text-center text-lg font-semibold">
            Top Performer
          </h2>
          <img
            src={TopPerformerImg}
            alt="TopPerformerImg"
            className="mx-auto mt-3 w-12 h-12"
          />
          <p className="text-3xl text-center font-bold">
            {topPerformer ? topPerformer.name : "N/A"}
          </p>

          <p className="text-sm text-gray-500 text-center mt-1">
            {topPerformer ? `${topPerformer.marks} marks` : ""}
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow rounded-xl p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-gray-600 text-center text-lg font-semibold">
            Pass Rate
          </h2>
          <img
            src={GreenCheck}
            alt="Green Check"
            className="mx-auto mt-3 w-12 h-12"
          />
          <p className="text-3xl text-center font-bold">
            {passRate.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-[650px] w-full text-gray-700 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b font-semibold">Name</th>
              <th className="py-3 px-4 border-b font-semibold">Age</th>
              <th className="py-3 px-4 border-b font-semibold">Course</th>
              <th className="py-3 px-4 border-b font-semibold">Marks</th>
              <th className="py-3 px-4 border-b font-semibold">Grade</th>
              <th className="py-3 px-4 border-b font-semibold">Result</th>
              <th className="py-3 px-4 border-b font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="7" className="py-4 text-gray-500 text-center">
                  No students found.
                </td>
              </tr>
            ) : (
              filteredStudents.map((student) => (
                <tr key={student._id}>
                  <td className="py-3 px-4 border-b">{student.name}</td>
                  <td className="py-3 px-4 border-b">{student.age}</td>
                  <td className="py-3 px-4 border-b">{student.course}</td>
                  <td className="py-3 px-4 border-b">{student.marks}</td>
                  <td className="py-3 px-4 border-b">
                    {getGrade(student.marks)}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {getResult(student.marks)}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {/* Edit button */}
                    {(user?.role === "admin" || user?.role === "teacher") && (
                      <Link
                        to={`/dashboard/StudentReport/${student._id}`}
                        className="inline-flex h-[45px] px-6 bg-blue-500 text-white text-center items-center justify-center rounded hover:bg-blue-600 transition"
                      >
                        Get Report
                      </Link>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
