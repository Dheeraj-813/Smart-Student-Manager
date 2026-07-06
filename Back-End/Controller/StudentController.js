const studentService = require('../services/studentService');

// ➕ Add Student
const addStudent = async (req, res) => {
  try {
    const student = await studentService.addStudent(req.body);
    res.status(201).json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// 📄 Get Students
const getStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.json({
      success: true,
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  addStudent,
  getStudents
};