const asyncHandler = require("express-async-handler");
const Category = require('../models/category-info-model')

const getAllCategories = asyncHandler(async(req,res)=>{
    
    const categories =await Category.find();
    
    res.status(200).json(categories)
})


const createCategory = asyncHandler(async (req, res) => {
    const {
        main_category,
        sub_categories
        
    } = req.body;
    
    // Check if all mandatory fields are provided
    if ( !main_category||!sub_categories) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    
  

 
    const category = await Category.create({
        main_category,
        sub_categories
    });

    res.status(200).json({ message: "Category created successfully.", category });
});




module.exports = {getAllCategories,createCategory}