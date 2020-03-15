  
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Search from './components/Search';


const history=createBrowserHistory();
ReactDOM.render(
<Router history={history}>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/user' component={Search}/>
    </Switch>
</Router>
,document.getElementById('root'));