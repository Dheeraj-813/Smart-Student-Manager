require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const connectDB = require('../config/db');
const User = require('../models/user');

const createTeacher = async () => {
    try{
        // connect database
        await connectDB();

        // check whether teacher already exists
        const existingUser = await User.findOne({
            email: "teacher@gmail.com"
        });

        if(existingUser){
            console.log("A user with this email already exists.");
            process.exit();
        }

        // Encrypt password
        const hashedPassword = await bcrypt.hash('teacher123', 10);

        // Create Teacher
        const teacher = await User.create({
            name: 'Teacher',
            email: "teacher@gmail.com",
            password: hashedPassword,
            role: 'teacher'
        });

        console.log("Teacher created successfully..!");
        console.log(teacher);

        process.exit();
    }
    catch(error){
        console.error("Error creating teacher:", error);
        process.exit(1);
    }
    finally {
        // Close database connection
        const mongoose = require('mongoose');
        await mongoose.connection.close();
    }
}

createTeacher();
