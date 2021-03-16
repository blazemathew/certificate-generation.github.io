import React from 'react';
import { useHistory } from 'react-router-dom';

const User = () => {
    const history = useHistory();
    return(
        <div>
            <button>Dashboard</button>
            <button onClick={() => (history.push('/user/templates'))}>Template</button>
            <button>Log</button>
            <button>Certificates</button>
            <button>Settings</button>
        </div>
    );
}

export default User;