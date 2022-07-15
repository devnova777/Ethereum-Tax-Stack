const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    data: {
        // Todo: Go through response of Etherscan API to categorize the schema properly
        type: String,
        required: true,
    },
});

const TransactionModel = mongoose.model("transactions", TransactionSchema);
module.exports = TransactionModel;