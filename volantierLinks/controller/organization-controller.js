
const asyncHandler = require("express-async-handler");
const Organization = require('../models/organization-model')

const getAllOrganizations = asyncHandler(async(req,res)=>{
    
    const organizations =await Organization.find();
    
    res.status(200).json(organizations)
})


const getOrganization = asyncHandler(async (req, res) => {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
        res.status(404).json({ message: "Organization not found" }); // Return a response indicating organization not found
        return; // Return to prevent further execution
    }
    res.status(200).json(organization);
});



const updateOrganization =asyncHandler(async (req,res)=>{
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
        res.status(404).json({ message: "Organization not found" }); // Return a response indicating organization not found
        return; // Return to prevent further execution
    }

    const updatedOrganization = await Organization.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedOrganization)
})

const deleteOrganization = asyncHandler(async (req, res) => {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
        res.status(404).json({ message: "Organization not found" });
        return;
    }
    await Organization.findByIdAndDelete(req.params.id); // Remove the found organization
    res.status(200).json({ message: "Organization deleted successfully.", organization });
});

const createOrganization = asyncHandler(async (req, res) => {
    const {
        event_id,
        event_name,
        event_date,
        main_category,
        location,
        subcategories,
        skills_needed,
        number_of_volunteers_needed,
        organization_info,
        event_description
    } = req.body;
    
    // Check if all mandatory fields are provided
    if (!event_id || !event_name || !event_date || !main_category || !location || !subcategories || !skills_needed || !number_of_volunteers_needed || !organization_info || !event_description) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    
    // Validate organization_info
    if (!organization_info || !organization_info.Name || !organization_info.Location) {
        res.status(400);
        throw new Error("Organization information must include both Name and Location.");
    }
    
    // Check if Name and Location are strings
    if (typeof organization_info.Name !== 'string' || typeof organization_info.Location !== 'string') {
        res.status(400);
        throw new Error("Name and Location in organization_info must be strings.");
    }

    // Create the organization
    const organization = await Organization.create({
        event_id,
        event_name,
        event_date,
        main_category,
        subcategories,
        location,
        skills_needed,
        number_of_volunteers_needed,
        organization_info,
        event_description
    });

    res.status(200).json({ message: "Organization created successfully.", organization });
});


module.exports = {getAllOrganizations, getOrganization,createOrganization,deleteOrganization,updateOrganization}