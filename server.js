const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./database/db");



// require dotenv
dotenv.config();

//mongoConnection
connectDB();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
// app.use(colors.bgYellow)

app.get("/", (req, res) => {
  res.send("Hello, Wellcome to our webPage..");
});

const PORT = process.env.PORT || 5000;
// Listen
app.listen(PORT, () => {
  console.log(`Server Connect at http://localhost:${PORT}`.bgYellow.black);
});
