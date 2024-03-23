const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    main_category: {
        type: String,
        required: [true, "Please add main category"]
    },
    sub_categories: {
        type: String,
        required: [true, "Please add sub categories"]
    },
    skill_set: {
        type: [String],
        required: [true, "Please add skill set"]
    }
})

module.exports= mongoose.model("Category", categorySchema);

