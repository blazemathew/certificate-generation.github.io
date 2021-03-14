import React,{ memo }from 'react';
import { Switch } from 'react-router-dom';

import { PublicRoute } from './publicRoutes';
import { PrivateRoute } from './privateRoutes';

import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import UserCertificate from '../UserCertificate';

const Routes = ({setIsAuthenticated}) => {
    return(
        <div>
            <Switch>
                <PublicRoute exact path="/" component={Home} />
                <PublicRoute exact path="/login" component={(props) => <Login setIsAuthenticated={setIsAuthenticated} />} />
                <PublicRoute exact path="/register" component={Register} />
                <PrivateRoute exact path="/user" component={UserCertificate} />
            </Switch>
        </div>
    );
}

export default memo(Routes);