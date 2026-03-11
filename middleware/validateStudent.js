const validateStudent = (req, res, next) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and Course are required"
    });
  }

  next();
};

module.exports = validateStudent;