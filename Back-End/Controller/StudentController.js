const studentService = require('../services/studentService');

// ➕ Add Student
const addStudent = async (req, res) => {
  try {
    const { name, age, course, marks } = req.body;

    if (!name || !age || !course || marks === undefined) {
      return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }

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

// update student
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
      success: false,
      message: "No data provided for update."
      });
    }

    const updatedStudent = await studentService.updateStudent(id, req.body);

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found."
      });
    }
    res.status(200).json({
      success: true,
      data: updatedStudent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// delete student 
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;    
    const deletedStudent = await studentService.deleteStudent(id);
    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found."
      });
    }
    res.status(200).json({
      success: true,
      message: "Student deleted successfully."
    });
  }
  catch (error) {
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
    res.status(200).json({
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
  getStudents,
  updateStudent,
  deleteStudent
};