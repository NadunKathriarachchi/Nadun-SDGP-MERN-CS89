const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema({
    event_id: {
        type: String,
        required: [true, "Please add event_id"]
    },
    event_name: {
        type: String,
        required: [true, "Please add event_name"]
    },
    event_date: {
        type: String,
        required: [true, "Please add event_date"]
    },
    main_category: {
        type: String,
        required: [true, "Please add main_category"]
    },
    location: {
        type: String,
        required: [true, "Please add location"]
    },
    subcategories: {
        type: String,
        required: [true, "Please add subcategories"]
    },

    skills_needed: {
        type: [String],
        required: [true, "Please add skills_needed"]
    },
    number_of_volunteers_needed: {
        type: Number,
        required: [true, "Please add number_of_volunteers_needed"]
    },
    organization_info: {
        Name: {
            type: String,
            required: [true, "Please add organization name"]
        },
        Location: {
            type: String,
            required: [true, "Please add organization location"]
        }
    },
    event_description: {
        type: String,
        required: [true, "Please add event_description"]
    }
},{ collection: "OrganizationDatabase" });

module.exports= mongoose.model("Organization", organizationSchema);

