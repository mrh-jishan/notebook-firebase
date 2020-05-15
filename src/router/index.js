import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../components/Home";
import Todo from "../components/Todo";
import NotFound from "../components/NotFound";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('auth-token') ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/home', state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    )
}

const AppRoot = () => (
    <Switch>
        <Route exact path="/home" component={Home} />
        <PrivateRoute exact path="/todo" component={Todo} />
        <Route exact path="/" render={() => (<Redirect to='/home' />)} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default AppRoot;