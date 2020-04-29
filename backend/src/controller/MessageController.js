const mongoose = require('mongoose');

const Messages = mongoose.model('Messages');
module.exports = {
    async index(req, res){
        const messages = await Messages.find();

        return res.json(messages);
    },

    async create(req, res){
        const message = await Messages.create({
            User: req.headers.authorization,
            message: req.body.message,
            name: req.body.name
        });

        return res.json(message);
    }
};