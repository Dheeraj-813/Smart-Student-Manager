import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getStudentById} from "../Services/StudentService"

function StudentReport() {
  const {id: studentId} = useParams();

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(''); 

  const [studentReport, setStudentReport] = useState({
    name: "",
    age:"",
    course: "",
    marks: ""
  })

  useEffect(() => {

    const fetchStudentReport = async () => {
      try {
        // Assuming you have a function to fetch the student report by ID
        const response = await getStudentById(studentId);
        setStudentReport(response.data);
      } catch (error) {
        console.error("Error fetching student report:", error);
        setError("Failed to load student report.");
      }
      finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchStudentReport();
    }
  }, [studentId]);

    const getGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    if (marks >= 50) return "D";
    return "F";
  };

  const getResult = (marks) => {
    return marks >= 40 ? "PASS" : "FAIL";
  };

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <div className="text-gray-800">

      {/* Report Header */}
      <header className="text-center border-b-2 border-gray-800 pb-5">
        <h1 className="text-3xl font-bold tracking-wide">
          SMART STUDENT MANAGER
        </h1>

        <p className="mt-2 text-xl font-semibold">
          Student Performance Report
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Academic Performance Summary
        </p>
      </header>

      {/* Student Information */}
      <section className="mt-8">
        <h2 className="text-lg font-bold uppercase border-b pb-2">
          Student Information
        </h2>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-sm text-gray-500">Student Name</p>
            <p className="font-semibold">{studentReport.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-semibold">{studentReport.age}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Course</p>
            <p className="font-semibold">{studentReport.course}</p>
          </div>
        </div>
      </section>

      {/* Academic Performance */}
      <section className="mt-8">
        <h2 className="text-lg font-bold uppercase border-b pb-2">
          Academic Performance
        </h2>

        <div className="grid grid-cols-3 gap-4 mt-5 text-center">

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Marks</p>
            <p className="text-2xl font-bold">
              {studentReport.marks}
            </p>
            <p className="text-xs text-gray-500">out of 100</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Grade</p>
            <p className="text-2xl font-bold">
              {getGrade(studentReport.marks)}
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Result</p>
            <p className="text-2xl font-bold">
              {getResult(studentReport.marks)}
            </p>
          </div>

        </div>
      </section>

      {/* Performance Summary */}
      <section className="mt-8">
        <h2 className="text-lg font-bold uppercase border-b pb-2">
          Performance Summary
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          The student has demonstrated{" "}
          <strong>
            {studentReport.marks >= 80
              ? "excellent"
              : studentReport.marks >= 60
              ? "good"
              : studentReport.marks >= 35
              ? "fair"
              : "poor"}
          </strong>{" "}
          academic performance with an overall score of{" "}
          <strong>{studentReport.marks}%</strong>.
        </p>
      </section>

      {/* Report Footer */}
      <section className="mt-16 flex justify-between items-end">

        <div>
          <p className="text-sm text-gray-500">Report Date</p>
          <p className="font-semibold">
            {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="text-center">
          <div className="w-40 border-b border-gray-800 mb-2"></div>
          <p className="text-sm">Authorized Signature</p>
        </div>

      </section>

    </div>
  );
}
export default StudentReport