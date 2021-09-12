const router = require('express').Router();
const Blog = require('../models/Blog');


router.route('/').get((req, res) => {
    Blog.find()
    .then((blog) => res.json(blog))
    .catch(err => console.log(err));
});

module.exports = router;