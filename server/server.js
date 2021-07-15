const express = require("express");
const cors = require("cors");
const { db } = require("./utils/db");

const app = express();

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
});

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.listen(3001, () => {
  console.log("Server is running");
});
