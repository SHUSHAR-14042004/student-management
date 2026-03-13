const express = require("express");
const router = express.Router();


const {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
  searchStudents
} = require("../controllers/studentController");
const validateStudent = require("../middleware/validateStudent");


router.get("/students", getStudents);
router.get("/students/search", searchStudents);
router.get("/students/:id", getStudentById);
router.post("/students", validateStudent, addStudent);
router.put("/students/:id", validateStudent, updateStudent);
router.delete("/students/:id", deleteStudent);


module.exports = router;