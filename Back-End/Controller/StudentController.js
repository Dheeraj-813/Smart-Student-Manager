const studentService = require("../services/studentService");
const User = require("../models/user");

// ➕ Add Student
const addStudent = async (req, res) => {
  try {
    const { name, age, course, marks } = req.body;

    if (!name || !age || !course || marks === undefined) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const student = await studentService.addStudent(req.body);
    res.status(201).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
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
        message: "No data provided for update.",
      });
    }

    const updatedStudent = await studentService.updateStudent(id, req.body);

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found.",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
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
        message: "Student not found.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 📄 Get Students
const getStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 📄 Get Students by id
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentService.getStudentById(id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found.",
      });
    }
    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get student report for a specific student
const getMyStudentReport = async (req, res) => {
  try {
    // Only student accounts can access this endpoint
    if (req.user.role !== "student") {
      return res.status(403).json({
        success: false,
        message: "Access denied.",
      });
    }

    // Find the logged-in user using the ID from the verified JWT
    const user = await User.findById(req.user.id).select("studentId");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Check whether a student record is linked to this account
    if (!user.studentId) {
      return res.status(404).json({
        success: false,
        message: "No student record is linked to this account.",
      });
    }

    // Retrieve only the linked student's record
    const studentReport = await studentService.getMyStudentReport(
      user.studentId,
    );

    if (!studentReport) {
      return res.status(404).json({
        success: false,
        message: "Student report not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: studentReport,
    });
  } catch (error) {
    console.error("Error fetching student report:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

module.exports = {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  getStudentById,
  getMyStudentReport,
};
