const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    name: Schema.Types.String,
    description: Schema.Types.String,
    links: [{ type: Schema.Types.ObjectId, ref: "Link" }]
});

module.exports = mongoose.model("Topic", TopicSchema);