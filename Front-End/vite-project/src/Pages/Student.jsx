import { useState, useEffect} from "react";
import {getAllStudents, deleteStudent} from "../Services/StudentService"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Student = () => {

  const [search, setSearch] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  //   const students = [
  //   { id: 1, name: "John Doe", course: "Mathematics", marks: 85 },
  //   { id: 2, name: "Jane Smith", course: "History", marks: 78 },
  //   { id: 3, name: "Eric Wang", course: "Computer Science", marks: 92 },
  //   { id: 4, name: "Sara Lee", course: "Business Admin", marks: 88 },
  // ];

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchClick = () => {
    setSearchQuery(search);
    setCurrentPage(1);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

const indexOfLastStudent = currentPage * studentsPerPage;
const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

const currentStudents = filteredStudents.slice(
  indexOfFirstStudent,
  indexOfLastStudent
);

const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
    "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;
    
    try {
      await deleteStudent(id);
      setStudents((prevStudents) => {
      const updatedStudents = prevStudents.filter(
        (student) => student._id !== id
      );

      const updatedFilteredStudents = updatedStudents.filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const updatedTotalPages = Math.ceil(
        updatedFilteredStudents.length / studentsPerPage
      );

      if (currentPage > updatedTotalPages && updatedTotalPages > 0) {
        setCurrentPage(updatedTotalPages);
      }

      return updatedStudents;
    });
      toast.success("Student deleted successfully!");
    }
    catch (error) {
      console.error("Failed to delete student:", error);
      toast.error("Failed to delete student. Please try again.");
    }
  };

  useEffect (()=> {
    const fetchStudents = async () => {
      try{
        setLoading(true);
        const response = await getAllStudents();

        if(response.success){
          setStudents(response.data)
        }else{
          setError("unable to load Students...!");
        }
      }
      catch(error){
        console.error(error);
        setError(error.userMessage || "Something went wrong.");
      }
      finally{
        setLoading(false)
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return (
      <h2 className="text-center mt-10">
        Loading students...
      </h2>
    );
  }

  if (error) {
    return(
      <h2 className="text-center mt-10 text-red-600">
        {error}
      </h2>
    );
  }

  return (
    <>
      <div className="p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Student List</h1>

        {/* Search + Add Button */}
        <div className="flex items-center justify-between gap-4 border border-gray-300 rounded-md p-4 bg-gray-100 mb-6">
          <input
            type="text"
            placeholder="Search students..."
            onChange={handleSearch}
            value={search}
            className="flex-1 h-[45px] px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button onClick={handleSearchClick} className="h-[45px] px-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Search
          </button>
        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-[650px] w-full text-gray-700 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b font-semibold">Name</th>
                <th className="py-3 px-4 border-b font-semibold">Course</th>
                <th className="py-3 px-4 border-b font-semibold">Marks</th>
                <th className="py-3 px-4 border-b font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-4 text-gray-500">
                    No students found.
                  </td>
                </tr>
              ) : (
                currentStudents.map((student) => (
                  <tr
                    key={student._id}
                    className="hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-4 border-b">{student.name}</td>
                    <td className="py-3 px-4 border-b">{student.course}</td>
                    <td className="py-3 px-4 border-b">{student.marks}</td>
                    <td className="py-3 px-4 border-b">
                      {/* Edit button */}
                      <Link
                        to={`/dashboard/EditStudent/${student._id}`}
                        className="inline-block whitespace-nowrap px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition mr-2"
                      >
                        <i className="fa-solid fa-pen-to-square mr-2"></i>
                        Edit
                      </Link>

                      {/* Delete button */}
                      <button
                        className="inline-block whitespace-nowrap px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        onClick={() => handleDelete(student._id)}
                      >
                        <i className="fa-solid fa-trash-can mr-2"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 p-4">
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Student