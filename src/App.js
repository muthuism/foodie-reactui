import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/layouts/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Header from './components/layouts/Header';
import Alert from './components/layouts/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
const App = () => {
  return (
    <Fragment>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Fragment>
  );
};

export default App;
