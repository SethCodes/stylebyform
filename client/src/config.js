const dotenv = require('dotenv');

dotenv.config();

const BACKEND_URL = process.env.NODE_ENV === 'developement' ? "http://localhost:3000" : "https://test-mern-heroku.herokuapp.com"

// const BACKEND_URL = "http://localhost:5000"
export default BACKEND_URL;
