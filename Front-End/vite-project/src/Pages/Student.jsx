import { useState } from "react";

const Student = () => {

  const [search, setSearch] = useState('');

    const students = [
    { id: 1, name: "John Doe", course: "Mathematics", marks: 85 },
    { id: 2, name: "Jane Smith", course: "History", marks: 78 },
    { id: 3, name: "Eric Wang", course: "Computer Science", marks: 92 },
    { id: 4, name: "Sara Lee", course: "Business Admin", marks: 88 },
  ];

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
    <div className="p-6">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Student List
      </h1>

      {/* Search + Add Button */}
      <div className="flex items-center justify-between gap-4 border border-gray-300 rounded-md p-4 bg-gray-100 mb-6">
        <input
          type="text"
          placeholder="Search students..."
          onChange={handleSearch}
          value={search}
          className="flex-1 h-[45px] px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="h-[45px] px-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-gray-700 text-center">

          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b font-semibold">Name</th>
              <th className="py-3 px-4 border-b font-semibold">Course</th>
              <th className="py-3 px-4 border-b font-semibold">Marks</th>
              <th className="py-3 px-4 border-b font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100 transition">
                <td className="py-3 px-4 border-b">{student.name}</td>
                <td className="py-3 px-4 border-b">{student.course}</td>
                <td className="py-3 px-4 border-b">{student.marks}</td>
                <td className="py-3 px-4 border-b">
                  <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition mr-2">
                    <i class="fa-solid fa-pen-to-square"></i>
                    Edit
                  </button>
                  <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
    </>
  );
};

export default Student