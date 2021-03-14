import React from 'react';
import { Route,Redirect } from 'react-router-dom';

export const PublicRoute = ({component: Component,...rest}) => {
    const isAuthenticated = sessionStorage.getItem('token');

    return(
        <Route 
            {...rest}
            render ={(props) =>
                !isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect 
                        to={{ pathname: '/user', state: { from: props.location } }}
                    />
                )
            }
        />
    );
}