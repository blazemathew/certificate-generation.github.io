import React,{ useState } from 'react';
import { Link,useHistory  } from 'react-router-dom';
// import { useForm } from "react-hook-form";

import Avatar from '../../Assets/avatar.png';
import './register.scss';

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Register = () => {
    const [ email,setEmail ] = useState('');
    const [ password,setPassword ] = useState('');
    const [ confirmPassword,setConfirmPassword ] = useState('');
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
            history.push("/login");
        }
    }

    return(
        <div className="register-box">
            <img src={Avatar} className="avatar" alt="avatar"/>
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input 
                    type="text"
                    name="email" 
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

                <p>Confirm Password</p>
                <input 
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                {(confirmPassword === "" && emailValidate !== "") && <div className="error-message">Please Confirm New Password</div>}

                <div className="submit">
                    <input type="submit" name="submit" value="Register" />
                </div>
                <div className="forgot-password">
                    <Link to="#">Forgot Password</Link>
                </div>
                 
            </form>
        </div>
    );
}

export default Register;