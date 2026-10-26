// import React from 'react'
import { useState } from "react";
import { addStudent } from "../Services/StudentService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const courseSubjects = {
  MBA: [
    "Perspective Management",
    "Operations Management",
    "Marketing Management",
    "Business Communication",
    "Organizational Behaviour",
  ],

  MCA: [
    "Advanced Java",
    "Advanced DBMS",
    "Software Project Management",
    "Artificial Intelligence & Machine Learning (AI/ML)",
    "Information Security",
  ],

  MCOM: [
    "Strategic Management",
    "Corporate Finance",
    "Macro Economics",
    "Research Methodology for Business",
    "E-Commerce",
  ],

  MScIT: [
    "Soft Computing Technique",
    "Cloud Computing",
    "Data Center Technology",
    "Image Processing",
    "Research Methodology",
  ],

  MTech: [
    "Advanced Operating Systems",
    "Advanced Algorithms and Complexity",
    "Parallel Computing",
    "Network Design and Management",
    "Adaptive Business Intelligence",
  ],
};

const AddStudent = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    subjects: [],
  });

const handleChange = (e) => {
  setStudent((prevStudent) => ({
    ...prevStudent,
    [e.target.name]:
      e.target.name === "age"
        ? e.target.value === ""
          ? ""
          : Number(e.target.value)
        : e.target.value,
  }));
};

  const handleSubjectMarksChange = (index, value) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      subjects: prevStudent.subjects.map((subject, subjectIndex) =>
        subjectIndex === index
          ? {
              ...subject,
              marks: value === "" ? "" : Number(value),
            }
          : subject,
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    if (
      student.age === "" ||
      !Number.isInteger(student.age) ||
      student.age < 18 ||
      student.age > 35
    ) {
      toast.error("Age must be a whole number between 18 and 35.");
      return;
    }

    // if (student.marks < 0 || student.marks > 100) {
    //   toast.error("Marks must be between 0 and 100.");
    //   return;
    // }

    if (student.subjects.length !== 5) {
      toast.error("Please select a course with five subjects.");
      return;
    }

    const invalidSubject = student.subjects.find(
      (subject) =>
        subject.marks === "" ||
        !Number.isInteger(subject.marks) ||
        subject.marks < 0 ||
        subject.marks > 100,
    );

    if (invalidSubject) {
      toast.error(
        `Please enter valid marks between 0 and 100 for ${invalidSubject.subjectName}.`,
      );
      return;
    }

    setLoading(true);

    try {
      const response = await addStudent(student);

      setStudent({
        name: "",
        age: "",
        course: "",
        subjects: [],
      });

      toast.success(`Student ${response.data.name} added successfully!`);

      navigate("/dashboard/student");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while adding the student.";

      setError(errorMessage);

      console.error("Error adding student:", error);
      console.log("Backend error response:", error.response?.data);
      toast.error("Failed to add student. Please try again.");
    } finally {
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
            name="name"
            className="w-full mb-4 p-2 border rounded"
            onChange={handleChange}
            value={student.name}
            required
          />

          <input
            type="number"
            placeholder="Age"
            name="age"
            className="w-full mb-4 p-2 border rounded"
            onChange={handleChange}
            value={student.age}
          />

          <select
            name="course"
            className="w-full mb-4 p-2 border rounded"
            value={student.course}
            onChange={(e) => {
              const selectedCourse = e.target.value;

              setStudent((prevStudent) => ({
                ...prevStudent,
                course: selectedCourse,
                subjects: selectedCourse
                  ? courseSubjects[selectedCourse].map((subjectName) => ({
                      subjectName,
                      marks: "",
                    }))
                  : [],
              }));
            }}
            required
          >
            <option value="">Select Course</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="MCOM">MCOM</option>
            <option value="MScIT">MScIT</option>
            <option value="MTech">MTech</option>
          </select>

          {student.subjects.length > 0 && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-3">Subject Marks</h2>

              {student.subjects.map((subject, index) => (
                <div key={subject.subjectName} className="mb-4">
                  <label className="block mb-1 font-medium">
                    {subject.subjectName}
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    placeholder="Enter marks (0–100)"
                    className="w-full p-2 border rounded"
                    value={subject.marks}
                    onChange={(e) =>
                      handleSubjectMarksChange(index, e.target.value)
                    }
                    required
                  />
                </div>
              ))}
            </div>
          )}

          {/* Error Message */}
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <button
            type="submit"
            className={`px-6 py-2 rounded text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Student"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
