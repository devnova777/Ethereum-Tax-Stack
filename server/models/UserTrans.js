const mongoose = require('mongoose');

const UserTransSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date(),
    },
    userOID: {
        type: String,
        required: true,
    },
    transOID: {
        type: String,
        required: true,
    }
});

const UserTransModel = mongoose.model("usertrans", UserTransSchema);
module.exports = UserTransModel;