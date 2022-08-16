// routes/api/userTrans.js

const express = require('express');
const router = express.Router();

// Load UserTrans model
const UsersModel = require('../../models/Users');


/**
 * @route GET users/test
 * @description Tests users route
 * @access Public
 */
router.get('/test', (req, res) => res.send('users route testing'));

/**
 * @route GET users
 * @description Get all users objects
 * @access Public
 */
router.get('/', (req, res) => {
    UsersModel.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ noUsersFound: '*No Users*' }));
});

/**
 * @route GET users/:username
 * @description Gets users object by username
 * @access Public
 */
router.get('/:username', (req, res) => {
    UsersModel.find({ userOID: req.params.username }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


/**
 * @route POST users/:user
 * @description Add users object 
 * @access Public
 */
router.post('/', (req, res) => {
    UserModel.create(req.body)
        .then(usertrans => res.json({msg: 'User added...'}))
        .catch(err => res.status(400).json({ error: '*Adding user failed*' }));
});

module.exports = router;