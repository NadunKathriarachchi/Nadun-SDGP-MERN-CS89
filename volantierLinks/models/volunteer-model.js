const mongoose = require("mongoose");

const volunteerSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: [true, "Please add user_id"]
    },
    timestamp: {
        type: String,
        required: [true, "Please add timestamp"]
    },
    name: {
        type: String,
        required: [true, "Please add name"]
    },
    age: {
        type: Number,
        required: [true, "Please add age"]
    },
    province: {
        type: String,
        required: [true, "Please add province"]
    },
    district: {
        type: String,
        required: [true, "Please add district"]
    },

    gender: {
        type: String,
        required: [true, "Please add gender"]
    },
    availability: {
        type: String,
        required: [true, "Please add availability"]
    },
    skills: {
        type: [String],
        required: [true, "Please add skills_needed"]
    },
    categories_info: {
        type: Object,
        required: false
    },
    transportation: {
        type: String,
        required: [true, "Please add event_description"]
    },
    demographic_info: {
        Ethnicity: {
            type: String,
            required: [true, "Please add organization name"]
        },
        Education: {
            type: String,
            required: [true, "Please add organization location"]
        }
    }
},{ collection: "UserDatabase" });

module.exports= mongoose.model("volunteers", volunteerSchema);

