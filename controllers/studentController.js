const Student = require("../models/Student");


exports.getStudents = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const sort = req.query.sort || "name";

    const skip = (page - 1) * limit;

    const students = await Student.find()
      .sort(sort)
      .skip(skip)
      .limit(limit);

    res.json(students);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchStudents = async (req, res) => {
  try {

    const { name } = req.query;

    const students = await Student.find({
      name: { $regex: name, $options: "i" }
    });

    if (students.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(students);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



