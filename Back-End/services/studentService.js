const Student = require("../models/student");
const courseSubjects = require("../config/courseSubjects");

// Create the five subjects for a course
const createSubjects = (course) => {
  const subjects = courseSubjects[course];

  if (!subjects) {
    throw new Error("Invalid course selected.");
  }

  return subjects.map((subjectName) => ({
    subjectName,
    marks: 0,
  }));
};

// Add Student
const addStudent = async (data) => {
  const { subjects, ...studentData } = data;

  const student = new Student({
    ...studentData,
    marks: 0,
    subjects: createSubjects(data.course),
  });

  return await student.save();
};

const updateStudent = async (id, data) => {
  const student = await Student.findById(id);

  if (!student) {
    return null;
  }

  const originalCourse = student.course;

  // Update basic student details
  ["name", "age", "course"].forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(data, field)) {
      student[field] = data[field];
    }
  });

  // Reset subjects if the course changes
  if (student.course !== originalCourse) {
    student.subjects = createSubjects(student.course);
  } else if (!student.subjects || student.subjects.length === 0) {
    student.subjects = createSubjects(student.course);
  }

  // Update individual subject marks
  if (Object.prototype.hasOwnProperty.call(data, "subjects")) {
    if (!Array.isArray(data.subjects)) {
      const error = new Error("Subjects must be an array.");
      error.statusCode = 400;
      throw error;
    }

    const updatedSubjects = new Set();

    for (const item of data.subjects) {
      if (!item || typeof item !== "object" || Array.isArray(item)) {
        const error = new Error("Each subject must be a valid object.");
        error.statusCode = 400;
        throw error;
      }

      const { subjectName, marks } = item;

      // Validate subject name
      const subject = student.subjects.find(
        (subject) => subject.subjectName === subjectName,
      );

      if (!subject) {
        const error = new Error(
          `Invalid subject for the selected course: ${subjectName}`,
        );
        error.statusCode = 400;
        throw error;
      }

      // Prevent duplicate subject entries in one request
      if (updatedSubjects.has(subjectName)) {
        const error = new Error(`Duplicate subject in request: ${subjectName}`);
        error.statusCode = 400;
        throw error;
      }

      updatedSubjects.add(subjectName);

      // Validate marks
      if (
        typeof marks !== "number" ||
        !Number.isFinite(marks) ||
        marks < 0 ||
        marks > 100
      ) {
        const error = new Error(
          `Marks for ${subjectName} must be between 0 and 100.`,
        );
        error.statusCode = 400;
        throw error;
      }

      // Update only the specified subject
      subject.marks = marks;
    }
  }

  // Calculate average marks automatically
  if (student.subjects.length !== 5) {
    const error = new Error("A student must have exactly five subjects.");
    error.statusCode = 400;
    throw error;
  }

  const totalMarks = student.subjects.reduce(
    (total, subject) => total + subject.marks,
    0,
  );

  student.marks = totalMarks / 5;

  return await student.save();
};

// Delete Student
const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};

// Get All Students
const getAllStudents = async () => {
  return await Student.find();
};

// Get Student by ID
const getStudentById = async (id) => {
  return await Student.findById(id);
};

// Get Student Report
const getMyStudentReport = async (studentId) => {
  return await Student.findById(studentId);
};

module.exports = {
  addStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  getMyStudentReport,
};
