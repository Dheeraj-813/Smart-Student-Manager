
const mongoose = require('mongoose');
const courseSubjects = require('../config/courseSubjects');

const subjectSchema = new mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
      trim: true
    },
    marks: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: 0
    }
  },
  { _id: false }
);

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 35
  },
  course: {
    type: String,
    required: true,
    enum: Object.keys(courseSubjects)
  },
  marks: {
    type: Number,
    required: true
  },
  subjects: {
    type: [subjectSchema],
    validate: {
      validator: function (subjects) {
        const expectedSubjects = courseSubjects[this.course];

        if (!expectedSubjects || subjects.length !== 5) {
          return false;
        }

        const actualNames = subjects.map(
          subject => subject.subjectName
        );

        return expectedSubjects.every(
          subjectName => actualNames.includes(subjectName)
        );
      },
      message: 'A student must have exactly the five subjects assigned to their course.'
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
