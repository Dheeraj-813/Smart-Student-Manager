require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const connectDB = require('../config/db');
const User = require('../models/user');

const createAdmin = async () => {
    try{

        // connect database
        await connectDB();

        // check whether admin already exists
        const existingUser = await User.findOne({
            email: "admin@gmail.com"
        });

        if(existingUser){
            console.log("Admin already exists");
            process.exit();
        }

        // Encrypt password
        const hashedPassword = await bcrypt.hash('admin123', 10);

        // Create Admin
        const admin = await User.create({
            name: 'Admin',
            email: "admin@gmail.com",
            password: hashedPassword,
            role: 'admin'
        });

        console.log("Admin created successfully..!");
        console.log(admin);

        process.exit();
    }
    catch(error){
        console.error("Error creating admin:", error);
        process.exit(1);
    }
}

createAdmin();