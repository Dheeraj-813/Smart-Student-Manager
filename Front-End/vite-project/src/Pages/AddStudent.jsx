// import React from 'react'
import {useState} from 'react';

const AddStudent = () => {

const [student, setStudent] = useState({
  name: "",
  course: "",
  marks: "",
});

const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]:
        e.target.name === "marks"
          ? e.target.value === "" 
            ? "" 
            : Number(e.target.value)
          : e.target.value
    });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(student); // for now

    // Reset form after submit
    setStudent({
      name: "",
      course: "",
      marks: ""
    });
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

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
          Add Student
        </button>

        </form>

      </div>
    </div>
  )
}

export default AddStudent