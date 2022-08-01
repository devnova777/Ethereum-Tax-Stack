// routes/api/userTrans.js

const express = require('express');
const router = express.Router();

// Load UserTrans model
const UserTransModel = require('../../models/UserTrans');


/**
 * @route GET userTrans/test
 * @description Tests userTrans route
 * @access Public
 */
router.get('/test', (req, res) => res.send('userTrans route testing'));

/**
 * @route GET userTrans
 * @description Get all userTrans objects
 * @access Public
 */
router.get('/', (req, res) => {
    UserTransModel.find()
        .then(usertrans => res.json(usertrans))
        .catch(err => res.status(404).json({ noUserTransfound: '*No UserTrans*' }));
});

/**
 * @route GET userTrans/:user
 * @description Get list of userTrans objects by user
 * @access Public
 */
router.get('/:id', (req, res) => {
    UserTransModel.find({ userOID: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


/**
 * @route POST userTrans/:transaction
 * @description Add userTrans object 
 * @access Public
 */
router.post('/', (req, res) => {
    UserTransModel.create(req.body)
        .then(usertrans => res.json({msg: 'UserTrans added...'}))
        .catch(err => res.status(400).json({ error: '*Adding userTrans failed*' }));
});

module.exports = router;