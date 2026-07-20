const Student = require('../models/student');

// ➕ Add Student
const addStudent = async (data) => {
  const student = new Student(data);
  return await student.save();
};

// update student
const updateStudent = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

// delete student
const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
}

// 📄 Get All Students
const getAllStudents = async () => {
  return await Student.find();
};

module.exports = {
  addStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
};