const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    ethAddress: {
        type: String,
        required: true,
    },
    ethBalance: {
        type: String,
        required: true,
    },
});

const UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;