import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './index.css';


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact={true} path='/' component={() => <Header Component={App}></Header>} />
            <Route path='/jokes' component={() => <Header Component={Jokes}></Header>} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);