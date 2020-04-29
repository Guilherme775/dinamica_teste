const mongoose = require('mongoose');

const Consultor = mongoose.model('Consultor');

module.exports = {
    async login(req, res){
        const { name, password } = req.body;

        const consultor = await Consultor.findOne()
        .where('name', name)
        .where('password', password)
        .select('_id');

        if(!consultor) {
            return res.status(400).json({
                erro: 'Consultor not found'
            });
        }

        return res.json(consultor);
    }
};