const express = require('express');
const router = express.Router();
const studentController = require('../Controller/StudentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware); // Apply authentication middleware to all routes

router.get('/my-report', studentController.getMyStudentReport);

// Routes
router.post('/', studentController.addStudent);
router.get('/', studentController.getStudents);
router.get("/:id", studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);


module.exports = router;