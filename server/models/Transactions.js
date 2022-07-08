const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    userHash: {
        type: String,
        required: true,
    },
    transactionHash: {
        type: String,
        required: true,
    },
});

const TransactionModel = mongoose.model("transactions", TransactionSchema);
module.exports = TransactionModel;