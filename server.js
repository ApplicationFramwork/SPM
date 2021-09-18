const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection success!");
})
//import routes
const noticesRouter = require("./routes/notices");
const studentRouter = require("./routes/students");
const subjectRoutes = require("./routes/SubjectRoutes");
const teacherRoutes = require("./routes/TeacherRoutes");
const lectureslidesRouter = require("./routes/LectureSlidesRoutes");

app.use("/uploads",express.static('uploads'))
app.use("/notices",noticesRouter);
app.use("/students",studentRouter);
app.use("/Subjects", subjectRoutes);
app.use("/Teacher", teacherRoutes);
app.use("/lectureslides", lectureslidesRouter);
app.use("/outputFiles", express.static('outputFiles'));
app.listen(PORT, () => {
    console.log("Server is up and running")
})
