const express = require("express");
const bodyParser = require("body-parser");

//Set up environment variables
require("dotenv").config();

//Create application
const app = express();

//Add body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlextended: false }));

//Start application
app.listen(process.env.PORT, () => console.log("Application is running"));