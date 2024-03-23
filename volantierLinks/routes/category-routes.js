const express = require("express")
const dotenv = require("dotenv").config();
const router = express.Router();
const  {getAllCategories,createCategory } = require("../controller/category-controller");

router.route("/").get(getAllCategories);
router.route("/").post(createCategory);
module.exports = router;