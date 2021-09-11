const dotenv = require('dotenv');

dotenv.config();

const BACKEND_URL = process.env.NODE_ENV === 'developement' ? "http://localhost:5000" : "https://test-mern-heroku.herokuapp.com"

export default BACKEND_URL;
