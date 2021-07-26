const express = require("express");
const { newGrievance } = require("../controllers/grievances");
const { verifyToken } = require("../middlewares/jwtAuth");

const router = express.Router();

router.get("/all-grievances", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "You can see it!",
    abc: req.decoded,
  });
});

router.post("/new-grievance", verifyToken, newGrievance);

module.exports = router;
