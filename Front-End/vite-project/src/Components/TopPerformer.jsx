

const TopPerformer = ({ students }) => {

  const topPerformers = [...students].sort((a, b) => b.marks - a.marks).slice(0, 5);

  return (
    <div>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Top Performers
          </h2>
          <table className="w-full text-gray-700 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b font-semibold">Rank</th>
                <th className="py-3 px-4 border-b font-semibold">Name</th>
                <th className="py-3 px-4 border-b font-semibold">Course</th>
                <th className="py-3 px-4 border-b font-semibold">Marks</th>
              </tr>
            </thead>
            <tbody>
              {topPerformers.length === 0 ? (
                <tr> 
                  <td colSpan="4" className="py-3 px-4 border-b text-center">
                    No performers found.
                  </td>
                </tr>
              ) : (
                topPerformers.map((student, index) => (
                  <tr key={student._id} className="hover:bg-gray-50 transition">
                    <td className="py-3 px-4 border-b text-xl">
                      {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                    </td>
                    <td className="py-3 px-4 border-b">{student.name}</td>
                    <td className="py-3 px-4 border-b">{student.course}</td>
                    <td className="py-3 px-4 border-b font-semibold">{student.marks}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default TopPerformer