const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { sequelize } = require("./models");

const port = process.env.PORT || 3005;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));

app.set("view engine", "ejs"); // template engine
app.set("views", path.join(__dirname, "views")); // setting views directory
app.use(express.static(path.join(__dirname, "public"))); // static files directory

const indexRouter = require("./routes/index.routes");
const studentsRouter = require("./routes/students.routes");
const authRouter = require("./routes/auth.routes");

app.use("/", indexRouter);
app.use("/students", studentsRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  sequelize.sync().then(() => {
    console.log(`Server running on ${port}`);
  });
});
