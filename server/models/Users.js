const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    ethAddress: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

const UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;