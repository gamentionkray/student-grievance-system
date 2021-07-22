const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { db } = require("../utils/db");

exports.login = function (req, res) {
  const { email, password } = req.body;

  db.query("SELECT * FROM student WHERE s_email = ?", [email], (err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
      });
    } else if (data.length === 0) {
      res.status(401).json({
        success: false,
        message: "User not found!",
      });
    } else {
      const user = data[0];
      bcrypt.compare(password, user.s_password, (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Something went wrong!",
          });
        } else if (!result) {
          res.status(401).json({
            success: false,
            message: "Incorrect Password!",
          });
        } else {
          let accessToken = jwt.sign(
            {
              id: user.s_id,
              email: user.s_email,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1d",
            }
          );
          
          if (typeof window !== "undefined") {
            window.sessionStorage.setItem('sgs_token', accessToken);
          }

          res.status(200).json({
            success: true,
            message: "Logged in successfully!",
            accessToken,
          });
        }
      });
    }
  });
};

exports.register = function (req, res) {
  const { name, email, password, address, dob, mob, gender, grno } = req.body;

  let sql = `SELECT s_email FROM student WHERE s_email = '${email}'`;

  db.query(sql, function (err, data, fields) {
    if (err)
      return res.status(500).json({
        success: false,
        message: "Something went wrong!",
      });

    if (data.length > 0) {
      res.status(400).json({
        success: false,
        message: "Email already exists!",
      });
    }
  });

  sql = `INSERT INTO student(s_name, s_email, s_password, s_address, s_dob, s_mob, s_gender, s_grno ) VALUES (?)`;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err)
        return res.status(500).json({
          success: false,
          message: "Something went wrong!",
        });

      let values = [name, email, hash, address, dob, mob, gender, grno];

      db.query(sql, [values], function (err, data, fields) {
        if (err)
          return res.status(500).json({
            success: false,
            message: "Something went wrong!",
          });

        res.status(200).json({
          success: true,
          message: "New user added successfully!",
        });
      });
    });
  });
};