
const asyncHandler = require("express-async-handler");
const Volunteer = require('../models/volunteer-model')

const getAllvolunteers = asyncHandler(async(req,res)=>{
    const volunteers =await Volunteer.find();
    res.status(200).json(volunteers)
})

const getAllVolunteersPreferences = asyncHandler(async(req,res)=>{
    const volunteers =await Volunteer.find();


    const selectedVolunteers = volunteers.map(volunteer => ({
        user_id: volunteer.user_id,
        categories_info: volunteer.categories_info,
        skills: volunteer.skills,
    }));



    res.status(200).json(selectedVolunteers)
})


const getVolunteer = asyncHandler(async (req, res) => {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
        res.status(404).json({ message: "Volunteer not found" }); // Return a response indicating Volunteer not found
        return; // Return to prevent further execution
    }
    res.status(200).json(volunteer);
});



const updateVolunteer =asyncHandler(async (req,res)=>{
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
        res.status(404).json({ message: "Volunteer not found" }); // Return a response indicating Volunteer not found
        return; // Return to prevent further execution
    }

    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedVolunteer)
})

const deleteVolunteer = asyncHandler(async (req, res) => {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
        res.status(404).json({ message: "Volunteer not found" });
        return;
    }
    await Volunteer.findByIdAndDelete(req.params.id); // Remove the found Volunteer
    res.status(200).json({ message: "Volunteer deleted successfully.", volunteer });
});

const createVolunteer = asyncHandler(async (req, res) => {
    const {
        user_id,
        timestamp,
        name,
        age,
        province,
        district,
        gender,
        availability,
        skills,
        categories_info,
        transportation,
        demographic_info
    } = req.body;
    
    // Check if all mandatory fields are provided
    if (!user_id || !timestamp || !age || !province || !name || !gender || !district || !availability || !transportation || !skills) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    
    // Validate Volunteer_info
    if (!demographic_info || !demographic_info.Ethnicity || !demographic_info.Education) {
        res.status(400);
        throw new Error("Volunteer information must include both Ethnicity and Education.");
    }
    
    // Check if Name and Location are strings
    if (typeof demographic_info.Ethnicity !== 'string' || typeof demographic_info.Education !== 'string') {
        res.status(400);
        throw new Error("Ethnicity and Education in demographic_info must be strings.");
    }

    // Create the Volunteer
    const volunteer = await Volunteer.create({
        user_id,
        timestamp,
        name,
        age,
        province,
        district,
        gender,
        availability,
        skills,
        categories_info,
        transportation,
        demographic_info
    });
    

    res.status(200).json({ message: "Volunteer created successfully.", volunteer });
});

module.exports = createVolunteer;


module.exports = {getAllvolunteers, getVolunteer,createVolunteer,deleteVolunteer,updateVolunteer,getAllVolunteersPreferences}