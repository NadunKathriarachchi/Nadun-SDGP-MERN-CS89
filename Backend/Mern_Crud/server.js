const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const DBURL = 'mongodb+srv://User_Database:kumal123@cluster0.gplvbuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DBURL)
  .then(() =>{
   console.log('Connected!');
  })
  .catch((err) => console.log('Connection error',err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
