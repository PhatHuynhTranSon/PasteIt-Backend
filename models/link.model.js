const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create link schema
const LinkSchema = new Schema({
    name: Schema.Types.String,
    url: Schema.Types.String
});

//Export
module.exports = mongoose.model("Link", LinkSchema);