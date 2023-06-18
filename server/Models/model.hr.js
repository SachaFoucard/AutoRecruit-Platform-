const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const HRModel = mongoose.model('hr', schema); // Use 'HRModel' as the model name instead of 'hr'

module.exports = HRModel;
