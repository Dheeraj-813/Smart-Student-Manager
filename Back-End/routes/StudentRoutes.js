const express = require('express');
const router = express.Router();
const studentController = require('../Controller/studentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware); // Apply authentication middleware to all routes

// Routes
router.post('/add', studentController.addStudent);
router.get('/', studentController.getStudents);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);


module.exports = router;