const express = require("express");
const router = express.Router();


const {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.post("/students", addStudent);
router.delete("/students/:id", deleteStudent);
router.put("/students/:id", updateStudent);

module.exports = router;