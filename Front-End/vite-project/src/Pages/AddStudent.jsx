// import React from 'react'
import {useState} from 'react';
import { addStudent } from '../Services/StudentService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddStudent = () => {

const navigate = useNavigate();

const [loading, setLoading] = useState(false);

const [error, setError] = useState('');

const [student, setStudent] = useState({
  name: "",
  age: "",
  course: "",
  marks: "",
});

const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]:
        e.target.name === "age" || e.target.name === "marks" 
          ? e.target.value === "" 
            ? "" 
            : Number(e.target.value)
          : e.target.value
    });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(''); // Clear previous error messages

  try{
    const response = await addStudent(student);

    setStudent({
      name: "",
      age: "",
      course: "",
      marks: "",
    });

    toast.success(`Student ${response.data.name} added successfully!`);

    navigate("/dashboard/student");

  } catch(error){
    const errorMessage = error.response?.data?.message || "An error occurred while adding the student.";

    setError(errorMessage);

    console.error("Error adding student:", error);
    
    toast.error("Failed to add student. Please try again.");
  }
  finally{
    setLoading(false);
  }
  
};

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Add Student</h1>

      <div className="bg-gray-200 p-6 rounded shadow-md max-w-lg">

        <form className="mb-4" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Student Name"
          name='name'
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={student.name}
        />

        <input
          type="number"
          placeholder="Age"
          name="age"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={student.age}
        />

        <input
          type="text"
          placeholder="Course"
          name='course'
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={student.course}
        />

        <input
          type="number"
          name='marks'
          placeholder="Marks"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={student.marks}
        />

          {/* Error Message */}
          {error && (
            <p className="text-red-600 mb-4">
              {error}
            </p>
          )}

        <button type="submit" className={`px-6 py-2 rounded text-white ${
                        loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                        }`} 
        disabled={loading}>

          {loading ? "Adding..." : "Add Student"}
          
        </button>

        </form>

      </div>
    </div>
  )
}

export default AddStudent