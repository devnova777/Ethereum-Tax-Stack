// routes/api/userTrans.js

const express = require('express');
const router = express.Router();

// Load UserTrans model
const TransactionModel = require('../../models/Transactions');


/**
 * @route GET transactions/test
 * @description Tests userTrans route
 * @access Public
 */
router.get('/test', (req, res) => res.send('transaction route testing'));

/**
 * @route GET transactions
 * @description Get all transactions objects
 * @access Public
 */
router.get('/', (req, res) => {
    TransactionModel.find()
        .then(transactions => res.json(transactions))
        .catch(err => res.status(404).json({ noTransactionsFound: '*No Transactions*' }));
});

/**
 * @route GET transactions/data/:hash
 * @description Get transaction by hash
 * @access Public
 */
router.get('/data/:txnhash', (req, res) => {
    TransactionModel.find({ txnHash: req.params.txnhash }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


/**
 * @route POST transactions/add
 * @description Add transaction object 
 * @access Public
 */
router.post('/add', (req, res) => {
    UserTransModel.create(req.body)
        .then(usertrans => res.json({msg: 'UserTrans added...'}))
        .catch(err => res.status(400).json({ error: '*Adding userTrans failed*' }));
});

module.exports = router;