import React, {useState} from 'react';
import '../css/Login.css';
import axios from 'axios';
import BACKEND_URL from '../config';
const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameChange = (e) => {
        let username = e.target.value;
        setUsername(username);
        
    } 
    const passwordChange = (e) => {
        let password = e.target.value;
        setPassword(password);

    } 


    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            username: username,
            password: password
        };
        console.log(user);
        axios.post(BACKEND_URL + "/users/add", user);
    }

    return (
        <div>
<form action="/users/add" type="POST" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={usernameChange} value={username}/>
                <input type="text" name="password" placeholder="Password" onChange={passwordChange} value={password}/>
                <button type="submit">Login</button>
            </form>        </div>
    )
}

export default SignUp
