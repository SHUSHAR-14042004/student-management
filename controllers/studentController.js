const Student = require("../models/Student");
let students = require("../data/students");

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.addStudent = async (req, res) => {
  const student = new Student(req.body);

  await student.save();

  res.status(201).json(student);
};

exports.deleteStudent = async (req, res) => {

  await Student.findByIdAndDelete(req.params.id);

  res.json({ message: "Student deleted successfully" });

};

exports.updateStudent = (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  let student = students.find(s => s.id == id);

  if (student) {
    student.name = updatedData.name || student.name;
    student.course = updatedData.course || student.course;

    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};

exports.getStudentById = (req, res) => {
  const id = req.params.id;

  const student = students.find(s => s.id == id);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};
exports.searchStudents = (req, res) => {
  const { name } = req.query;

  const result = students.filter(student =>
    student.name.toLowerCase().includes(name.toLowerCase())
  );

  if (result.length === 0) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(result);
};



