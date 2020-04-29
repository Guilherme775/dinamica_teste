const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async login(req, res){
        const { name } = req.body;

        const user = await User.findOne().where('name', name).select('_id');

        if(!user) {
            return res.status(400).json({
                erro: 'User not found'
            });
        }

        return res.json(user);
    }
};