import dotenv from 'dotenv'
dotenv.config()
const BACKEND_URL = "";

// const BACKEND_URL = process.env.NODE_ENV === 'development'? "http://localhost:5000":"https://ancient-cliffs-40563.herokuapp.com/"

export default BACKEND_URL;
