const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Endpoints
const TopicRouter = require("./routes/topic.route");

//Set up environment variables
require("dotenv").config();

//Create application
const app = express();

//Add body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Database connection
mongoose.connect(
    process.env.DATABASE_CONNECTION_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => { if (error) console.log(`Error encountered: ${error.errmsg}`); }
);

//Add endpoints
app.use("/topics", TopicRouter);

//Start application
app.listen(process.env.PORT, () => console.log("Application is running"));