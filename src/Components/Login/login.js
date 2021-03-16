import React,{ useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

import Avatar from '../../Assets/avatar.png';
import './login.scss';

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = ({setIsAuthenticated}) => {
    const [ email,setEmail ] = useState('');
    const [ password,setPassword ] = useState('');
    const [ emailValidate,setEmailValidate ] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!(email.match(mailformat))){
            setEmailValidate(true);
        }
        else{
            setEmailValidate(false);
        }
        if(email.match(mailformat) && password !== ""){
            sessionStorage.setItem('token', email);
            setIsAuthenticated(true);
            history.push("/user");
        }
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
                    placeholder="Enter Email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                {emailValidate && <div className="error-message">Invalid Email Id</div>}
                <p>Password</p>
                <input 
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {(password === "" && emailValidate !== "") && <div className="error-message">Please Provide a Password</div>}
                <div className="submit">
                    <input type="submit" name="submit" value="Login" />
                </div>
                <div className="forgot-password">
                    <Link to="#">Forgot Password</Link>
                </div>
            </form>
        </div>
 
    );
}

export default Login;