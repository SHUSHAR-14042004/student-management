let students = require("../data/students");

exports.getStudents = (req, res) => {
  res.json(students);
};

exports.addStudent = (req, res) => {
  const student = req.body;
  students.push(student);
  res.json(student);
};

exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  students = students.filter(s => s.id != id);
  res.json({ message: "Student deleted" });
};