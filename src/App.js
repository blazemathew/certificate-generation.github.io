import React,{ useState } from 'react';
import { BrowserRouter,Link } from 'react-router-dom';
import Routes from './Components/Router';

import './App.scss';

function App() {
  const [ isLoggedIn,setIsAuthenticated ] = useState(sessionStorage.getItem('token'));

  const logOut = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem('token'));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="menubar">
          <Link to={"/"}>Neo Certificates</Link>
          <div className="spacer" />
          {isLoggedIn?(
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

        <Routes setIsAuthenticated={setIsAuthenticated}/>

      </BrowserRouter> 
    </div>
  );
}

export default App;
