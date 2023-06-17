const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        mail: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        codepostal: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },
        adress: {
            type: String,
            require: true
        },
        resume: {
            name: String,
            data: Buffer,
            contentType: String,
        }
    });
const UserModel = mongoose.model('users', schema);

module.exports = UserModel;
