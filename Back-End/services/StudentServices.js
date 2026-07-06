const Student = require('../models/Student');

// ➕ Add Student
const addStudent = async (data) => {
  const student = new Student(data);
  return await student.save();
};

// 📄 Get All Students
const getAllStudents = async () => {
  return await Student.find();
};

module.exports = {
  addStudent,
  getAllStudents
};