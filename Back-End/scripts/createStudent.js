require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const connectDB = require("../config/db");
const User = require("../models/user");
const Student = require("../models/student");

const createStudent = async () => {
  try {
    // connect database
    await connectDB();

    // Find the particular existing student record
    const studentRecord = await Student.findById(
        '6a5739cede6041757650ebe9'
    );

    if (!studentRecord) {
      console.log("Student record not found. Please check the ID.");
      return;
    }

    // Check whether this login email already exists
    const existingStudent = await User.findOne({
      email: "rahul.tyagi@gmail.com",
    });

    if (existingStudent) {
      console.log("A user with this email already exists.");
      return;
    }

    // Create the student login account
    const hashedPassword = await bcrypt.hash("rahul123", 10);

    const studentUser = await User.create({
      name: studentRecord.name,
      email: "rahul.tyagi@gmail.com",
      password: hashedPassword,
      role: "student",
      studentId: studentRecord._id,
    });

    console.log("Student login created successfully!");
    console.log({
      id: studentUser._id,
      name: studentUser.name,
      email: studentUser.email,
      role: studentUser.role,
      studentId: studentUser.studentId,
    });
  } catch (error) {
    console.error("Error creating student:", error.message);
  } finally {
    // Close the database connection
    await mongoose.disconnect();
  }
};

createStudent();
