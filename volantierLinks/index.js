const express = require("express");
const errorHandler = require("./middleware/error-handler");
const connectDB = require("./config/db-connection");
const dotenv = require("dotenv").config();



connectDB();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/users",require("./routes/users-routes"));
xapp.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})