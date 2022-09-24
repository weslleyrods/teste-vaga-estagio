import React from 'react';
import ReactDOM from 'react-dom';

import Edit from './Edit';
import Home from './pages/Home';
import NotFound from './NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = ()=>{

    return(

        <div className='container mt-2'>
        <Router>
            <Switch>
                <Route exact path='/'>              
                    <Home/>
                </Route>
                <Route path='/edit/:id'>              
                    <Edit/>
                </Route>
                <Route path='*'>              
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)