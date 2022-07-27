/**
 * Initializing required files and dependencies
 */
const express = require('express');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const settings = require('./config/key.json'); 

/**
 * Connecting to Mongo Database
 */
const connectDB = require('./config/db');
connectDB();

/**
 * Loading Backend Route APIs
 */
const userTrans = require('./routes/api/userTransAPI');
const users = require('./routes/api/usersAPI');
const transactions = require('./routes/api/transactionsAPI');
app.use('/userTrans', userTrans);
app.use('/users', users);
app.use('/transactions', transactions);

/**
 * Miscellaneous
 */
app.listen(3001, () => {
    console.log('Server is online...');
});

/**
 * Essential Functions and APIs Needed:
 * New User (POST Request to Mongo)
 * Collect User Data (GET Request from EtherScan API & POST Request to Mongo)
 * Display Data (GET Request fom Mongo)
 * Generate Tax Forms (More research needed for this)
 */


app.post('/addUser', async (req, res) => {

    // Adds user to Mongo
    const user = req.body;
    const newUser = new UsersModel(user);
    await newUser.save();
    res.json(user); 

    // Todo: Handles all Etherscan API calls here here
    console.log("Fetching user's data on Etherscan");

});


app.get('/getTransactions', (req, res) => {
    TransactionModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.get('/getEtherBalance/:address', async (req, res) => {
    const userAddress = req.params.address;
    console.log(userAddress);
    const api_url = `https://api.etherscan.io/api?module=account&action=balance&address=${userAddress}&tag=latest&apikey=${settings.etherscanKey}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json);
});