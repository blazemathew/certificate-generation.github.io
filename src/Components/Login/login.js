import React,{ useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

import Avatar from '../../Assets/avatar.png';
import './login.scss';

const Login = ({setIsAuthenticated}) => {
    const [ userName,setUserName ] = useState('');
    const [ password,setPassword ] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('token', userName);
        sessionStorage.setItem('refreshToken', userName);
        setIsAuthenticated(sessionStorage.getItem('token'));
        history.push("/user");
    }

    return(
        <div className="login-box">
            <img src={Avatar} className="avatar" alt="avatar"/>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
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
                <input type="submit" name="submit" value="Login" />
                <Link to="#">Forget Password</Link> 
            </form>
        </div>
 
    );
}

export default Login;