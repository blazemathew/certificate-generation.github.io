import React from 'react';
import { Switch } from 'react-router-dom';

import { PublicRoute } from './publicRoutes';
import { PrivateRoute } from './privateRoutes';

import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import User from '../Components/User';
import Template from '../Components/Template';
import CreateTemplate from '../Components/Template/CreateTemplate';
import UserCertificate from '../Components/UserCertificate';

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