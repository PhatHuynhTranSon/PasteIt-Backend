const express = require("express");
const router = express.Router();
const TopicManager = require("../managers/topicmanager");

//Get instance
topicManager = TopicManager.getInstance();

//Add a topic
router.post("/", async (req, resp) => {
    try {
        //Get name and description
        const { name, description } = req.body;
        //Create topic
        topic = await topicManager.createTopic(name, description);
        //Respond
        resp
            .status(201)
            .json({
                id: topic._id,
                name: topic.name,
                description: topic.description
            });
    } catch (error) {
        resp
            .status(500)
            .json({
                message: "Error encountered"
            });
    }
});

//Update topic
router.patch("/:topicId", async (req, resp) => {
    try {
        const { topicId } = req.params;
        const { name, description } = req.body;

        const topic = await topicManager.updateTopic(topicId, name, description);

        resp.json({
            id: topic._id,
            name: topic.name,
            description: topic.description
        });
    } catch (error) {
        console.log(error);
        resp
            .status(500)
            .json({
                message: "Error encountered"
            });
    }
});

//Delete a topic
router.delete("/:topicId", async (req, resp) => {
    try {
        const { topicId } = req.params;
        await topicManager.deleteTopic(topicId);
        resp
            .status(204)
            .json({
                message: "Item deleted"
            });
    } catch (error) {
        resp
            .status(500)
            .json({
                message: "Error encountered"
            });
    }
});

//Update a topic
router.get("/:topicId", async (req, resp) => {
    try {
        const { topicId } = req.params;
        const topic = await topicManager.getTopic(topicId);

        resp.json({
            id: topic._id,
            name: topic.name,
            description: topic.description
        });
    } catch (error) {
        resp
            .status(500)
            .json({
                message: "Error encountered"
            });
    }
});

module.exports = router;
