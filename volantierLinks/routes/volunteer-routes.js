const express = require("express")
const dotenv = require("dotenv").config();
const router = express.Router();
const  {getAllvolunteers, getVolunteer,createVolunteer,updateVolunteer,deleteVolunteer,getAllVolunteersPreferences} = require("../controller/volunteer-controller");
const validateToken = require("../middleware/validate-token-handler");

router.use(validateToken);

router.route("/").get(getAllvolunteers)
router.route("/").post(createVolunteer);
router.route("/get-volunteers-preferences").get(getAllVolunteersPreferences);
router.route("/:id").get(getVolunteer)
router.route("/:id").put(updateVolunteer)
router.route("/:id").delete(deleteVolunteer)

module.exports = router;