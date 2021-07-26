const { db } = require("../utils/db");

exports.categories = (req, res) => {
  let sql = `SELECT * FROM categories`;

  db.query(sql, (err, rows) => {
    if (err) return res.status(500).send(err);
    res.send(rows);
  });
};

exports.subCategories = (req, res) => {
  let sql = `SELECT * FROM sub_categories`;

  db.query(sql, (err, rows) => {
    if (err) return res.status(500).send(err);
    res.send(rows);
  });
};
