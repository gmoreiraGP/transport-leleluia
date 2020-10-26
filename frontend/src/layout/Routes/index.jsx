import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import NotFound from "../../pages/NotFound";
import AuthComponent from "../../components/AuthComponent";
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
     
      <AuthComponent>
        <Route path='/dashboard' component={Dashboard} />
      </AuthComponent>

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
