import React from 'react';
import ReactDOM from 'react-dom';

import Edit from './Edit';
import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = ()=>{

    return(

        <div className='container mt-2'>

        <Router>
            <Route exact path='/'>              
                <Home/>
            </Route>
            <Route path='/edit/:id'>              
                <Edit/>
            </Route>
        </Router>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)