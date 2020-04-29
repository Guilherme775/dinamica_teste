import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Registry from './pages/Registry';
import Chat from './pages/Chat';
import Consulta from './pages/Consulta';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/consultor" exact component={Login}/>
                <Route path="/user" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/registry" component={Registry}/>
                <Route path="/chat" component={Chat}/>
                <Route path="/consulta" component={Consulta}/>
            </Switch>
        </BrowserRouter>
    );
}