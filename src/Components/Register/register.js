import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../Assets/avatar.png';
import './register.scss';

const Register = () => {
    const [ userName,setUserName ] = useState();
    const [ password,setPassword ] = useState();
    const [ confirmPassword,setConfirmPassword ] = useState();

    return(
        <div className="register-box">
            <img src={Avatar} className="avatar" alt="avatar"/>
            <h1>Register Form</h1>
            <form >
                <p>Username</p>
                <input 
                    type="text"
                    name="username" 
                    placeholder="Enter Username"
                    value={userName} 
                    onChange={e => setUserName(e.target.value)} 
                />
                <p>Password</p>
                <input 
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <p>Confirm Password</p>
                <input 
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <input type="submit" name="submit" value="Register" />
                <Link to="#">Forget Password</Link> 
            </form>
        </div>
    );
}

export default Register;