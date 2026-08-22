

const RecentStudent = ({students}) => {

    const recentStudents = [...students]
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 5);

  return (
    <div>
        <div className="overflow-hidden rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
            Recent Students
            </h2>
            <table className="w-full text-gray-700 text-center">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 border-b font-semibold">Name</th>
                        <th className="py-3 px-4 border-b font-semibold">Course</th>
                        <th className="py-3 px-4 border-b font-semibold">Marks</th>
                        <th className="py-3 px-4 border-b font-semibold">Joining Date</th>
                    </tr>   
                </thead>
                <tbody>
                    {recentStudents.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="py-3 px-4 border-b text-center">
                                No recent students found.
                            </td>
                        </tr>
                    ) : (
                        recentStudents.map((student) => (
                            <tr key={student._id} className="hover:bg-gray-50 transition">
                                <td className="py-3 px-4 border-b">{student.name}</td>
                                <td className="py-3 px-4 border-b">{student.course}</td>
                                <td className="py-3 px-4 border-b font-semibold">{student.marks}</td>
                                <td className="py-3 px-4 border-b">{new Date(student.createdAt).toLocaleDateString()}</td>
                            </tr>   
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default RecentStudent