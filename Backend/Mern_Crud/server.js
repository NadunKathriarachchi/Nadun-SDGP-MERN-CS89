const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const postRoutes = require('./routes/post');

app.use(bodyParser.json());

app.use(postRoutes);

const DBURL = 'mongodb+srv://User_Database:kumal123@cluster0.gplvbuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DBURL)
  .then(() =>{
   console.log('Connected!');
  })
  .catch((err) => console.log('Connection error',err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
