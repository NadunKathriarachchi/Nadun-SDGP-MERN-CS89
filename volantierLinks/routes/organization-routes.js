const express = require("express")
const dotenv = require("dotenv").config();
const router = express.Router();
const  {getAllOrganizations, getOrganization,createOrganization,updateOrganization,deleteOrganization} = require("../controller/organization-controller");
const validateToken = require("../middleware/validate-token-handler");

router.use(validateToken);

router.route("/").get(getAllOrganizations)
router.route("/").post(createOrganization);

router.route("/:id").get(getOrganization)
router.route("/:id").put(updateOrganization)
router.route("/:id").delete(deleteOrganization)

module.exports = router;