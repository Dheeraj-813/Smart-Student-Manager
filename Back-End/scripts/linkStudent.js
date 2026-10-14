require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/user');
const Student = require('../models/student');

const linkStudent = async () => {
  try {
    await connectDB();

    const user = await User.findOne({
      email: 'rahul.tyagi@gmail.com'
    });

    if (!user) {
      throw new Error('Student login account not found.');
    }

    const student = await Student.findById(
      '6a5739cede6041757650ebe9'
    );

    if (!student) {
      throw new Error('Student record not found.');
    }

    if (user.role !== 'student') {
      throw new Error('The account does not have the student role.');
    }

    user.studentId = student._id;
    await user.save();

    console.log('Student account linked successfully!');
    console.log({
      email: user.email,
      studentId: user.studentId
    });
  } catch (error) {
    console.error('Error linking student:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

linkStudent();