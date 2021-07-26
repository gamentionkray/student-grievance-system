const express = require("express");

const { categories, subCategories } = require("../controllers/misc");

const router = express.Router();

router.get("/categories", categories);

router.get("/sub-categories", subCategories);

module.exports = router;
