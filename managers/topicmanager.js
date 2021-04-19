const { Topic } = require("../models");

class TopicManager {
    async createTopic(name, description) {
        const topic = new Topic({
            name: name,
            description: description
        });

        await topic.save();

        return topic;
    }

    async updateTopic(id, name, description) {
        const topic = await Topic.findOne({ _id: id });
        topic.name = name;
        topic.description = description;
        await topic.save();

        return topic;
    }

    async deleteTopic(id) {
        await Topic.deleteOne({ _id: id });
    }

    async getTopic(id) {
        const topic = await Topic.findOne({ _id: id });
        return topic;
    }

    async getAllTopics() {
        const topics = await Topic.find({});
        return topics;
    }

    static getInstance() {
        return new TopicManager();
    }
}

module.exports = TopicManager;