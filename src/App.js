import './App.css';
import _  from "lodash"
import React from "react"
import {Component} from "react"
import axios from "axios"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import Hall from "./pages/Hall"


 




export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
    
              <Route path="/settings/:settingName" component={Settings} />
              <Route path="/settings" component={Settings} />
              <Route path="/hall" component={Hall} />
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Redirect from="/home" to="/" />
              <Route component={Page404} />
         
            </Switch>
          </BrowserRouter>
        )
    }
}

