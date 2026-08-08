import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { updateStudent, getStudentById} from "../Services/StudentService"

const EditStudent = () => {

  const {id: studentId} = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const [updatedStudent, setUpdatedStudent] = useState({
      name: "",
      age:"",
      course: "",
      marks: ""
    })

      // Fetch the student details when the component mounts or when the studentId changes
        useEffect(() => {

        const fetchStudent = async () => {

            try {

                const response = await getStudentById(studentId);

                setUpdatedStudent(response.data);

            } catch (error) {

                console.error("Error fetching student:", error);
                setError("Failed to load student details.");

            }

        };

        if (studentId) {
            fetchStudent();
        }

    }, [studentId]);

    // Handle input changes for the form fields
    const handleChange = (e) => {
        const { name, value } = e.target;

        setUpdatedStudent((prev) => ({
            ...prev,
            [name]:
                name === "age" || name === "marks"
                    ? value === ""
                        ? ""
                        : Number(value)
                    : value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Clear previous error messages

        try{
            // Call the updateStudent function from StudentService with the updated student data
            // Assuming you have the student ID available, replace 'studentId' with the actual ID
            await updateStudent(studentId, updatedStudent);
            
            alert(`Student updated successfully!`);

            navigate("/dashboard/student");


        } catch(error){
            setError(error.response?.data?.message || "An error occurred while updating the student.");
            console.error("Error updating student:", error);
        }
        finally{
            setLoading(false);
        }
    }
            


  return (
        <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Student</h1>

      <div className="bg-gray-200 p-6 rounded shadow-md max-w-lg">

        <form className="mb-4" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Student Name"
          name='name'
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={updatedStudent.name}
        />

        <input
          type="number"
          placeholder="Age"
          name="age"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={updatedStudent.age}
        />

        <input
          type="text"
          placeholder="Course"
          name='course'
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={updatedStudent.course}
        />

        <input
          type="number"
          name='marks'
          placeholder="Marks"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={updatedStudent.marks}
        />

          {/* Error Message */}
          {error && (
            <p className="text-red-600 mb-4">
              {error}
            </p>
          )}

        <button type="submit" disabled={loading} className={`px-6 py-2 rounded text-white ${
                        loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                        }`}>

          {loading ? "Updating..." : "Update Student"}
          
        </button>

        </form>

      </div>
    </div>
  )
}

export default EditStudent