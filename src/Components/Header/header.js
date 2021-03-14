import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = ({ isAuthenticated,setIsAuthenticated }) => {
    const logOut = () => {
        sessionStorage.clear();
        setIsAuthenticated(false);
      }
    
    return(
        <div className="menubar">
            <Link to={"/"}>Neo Certificates</Link>
            <div className="spacer" />
            {isAuthenticated?(
                <div className="menubar-right">
                  <Link to={"/"} onClick={logOut}>Logout</Link>
                </div>)
                :
                (<div className="menubar-right">
                  <Link to={"/register"}>SignUp</Link>
                  <Link to={"/login"}>SignIn</Link>
                </div>)
            }
        </div>
    );
}

export default Header;