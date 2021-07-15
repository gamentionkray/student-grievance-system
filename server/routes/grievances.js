const express = require("express");
const { verifyToken } = require("../middlewares/jwtAuth");

const router = express.Router();

router.get("/all-grievances", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "You can see it!",
  });
});

module.exports = router;
