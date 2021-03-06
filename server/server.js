const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

const { db } = require("./utils/db");

const app = express();

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
});

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/misc", require("./routes/misc"));
app.use("/api/grievances", require("./routes/grievances"));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
