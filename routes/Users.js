const router = require('express').Router();
const User = require('../models/User');


router.route('/').get((req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch(err => console.log(err));
});

module.exports = router;