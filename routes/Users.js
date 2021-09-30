const router = require('express').Router();
const User = require('../models/User');

router.route('/').get((req, res) => {
    User.find()
    .then(products => res.json(products))
    .catch((err) => console.log(err));

});


router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newProduct = new Product({
        username,
        password,
        

    });

    newProduct.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;