const express = require("express");
const router = express.Router();


const {
  getStudents,
  addStudent,
  deleteStudent,
  updateStudent
} = require("../controllers/studentController");

router.get("/students", getStudents);
router.post("/students", addStudent);
router.delete("/students/:id", deleteStudent);
router.put("/students/:id", updateStudent);

module.exports = router;