const router = require('express').Router();
const Product = require('../models/Product');

router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch((err) => console.log(err));

})
