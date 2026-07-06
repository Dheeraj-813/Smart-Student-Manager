const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Routes
router.post('/add', studentController.addStudent);
router.get('/', studentController.getStudents);

module.exports = router;