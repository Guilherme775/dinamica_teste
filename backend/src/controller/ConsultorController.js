const mongoose = require('mongoose');

const Consultor = mongoose.model('Consultor');

module.exports = {
    async index(req, res){
        const consultores= await Consultor.find();

        return res.json(consultores);
    },

    async create(req, res){
        const consultor = await Consultor.create(req.body);

        return res.json(consultor);
    },
};