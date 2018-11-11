import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
import Login from '../login/login'

export default props => (
    <Router history={hashHistory}>
        <Router path='/todos' component={Todo} />
        <Router path='/about' component={About} />
        <Router path='/login' component={Login} />
        <Redirect from='*' to='/todos' />
    </Router>
)