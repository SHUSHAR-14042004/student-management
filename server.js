const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const studentRoutes = require("./routes/studentRoutes");

const app = express();
const logger = require("./middleware/logger");

app.use(logger);
app.use(cors());
app.use(express.json());

app.use("/api", studentRoutes);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});