const express = require('express');
const Post = require('../models/post');

const router = express.Router();

/*router.post('/post/save',(req,res) => {

    let newPost = new Post(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post Saved!"
        });
    })

})*/

router.post("/post/save", (req, res) => {
    let newPost = new Posts(req.body);
    newPost.save()
      .then(() => {
        return res.status(200).json({
          success: "Post Saved Successfully",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err,
        });
      });
  });

module.exports = router;