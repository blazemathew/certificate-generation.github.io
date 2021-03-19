import React,{ useState } from 'react';

import Header from './Components/Header';
import Routes from './Router';

import './App.scss';

function App() {
  const token = sessionStorage.getItem('token');
  const [ isAuthenticated,setIsAuthenticated ] = useState(!!token);

  return (
    <div className="App">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes setIsAuthenticated={setIsAuthenticated}/>
    </div>
  );
}

export default App;
