const express = require('express');
const app = express();
const mongoose = require('mongoose');
const settings = require('./settings.json');
const TransactionModel = require('./models/Transactions');

const cors = require('cors');

app.use(cors());

mongoose.connect(
    `mongodb+srv://${settings.Username}:${settings.Password}@ethereumtaxstack.bngau.mongodb.net/EthereumTaxStack?retryWrites=true&w=majority`
);


app.get('/getTransactions', (req, res) => {
    TransactionModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

// app.use(express.json()); // Used for req.body object to be json format
// app.post('/createUser', async (req, res) => {
//     // const user = req.body
//     // const newUser = new UserModel(user);
// });

app.listen(3001, () => {
    console.log('server runs');
});