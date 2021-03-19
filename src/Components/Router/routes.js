import React from 'react';
import { Switch } from 'react-router-dom';

import { PublicRoute } from './publicRoutes';
import { PrivateRoute } from './privateRoutes';

import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import User from '../User';
import Template from '../Template';
import CreateTemplate from '../Template/CreateTemplate';
import UserCertificate from '../UserCertificate';

const Routes = ({setIsAuthenticated}) => {
    return(
        <div>
            <Switch>
                <PublicRoute exact path="/" component={Home} />
                <PublicRoute exact path="/login" component={(props) => <Login setIsAuthenticated={setIsAuthenticated} />} />
                <PublicRoute exact path="/register" component={Register} />

                <PrivateRoute exact path="/user" component={User} />
                <PrivateRoute exact path="/user/templates" component={Template} />
                <PrivateRoute exact path="/user/templates/create/:id" component={CreateTemplate} />
                <PrivateRoute exact path="/user/templates/create" component={CreateTemplate} />
                <PrivateRoute exact path="/user/templates/display/:id" component={UserCertificate} />
            </Switch>
        </div>
    );
}

export default Routes;