import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import PostPage from './postPage/postPage'

export default function RouteMap() {
    return (
        <Router>
            <Switch>
                <Route path="/post" component={PostPage}/>
            </Switch>
        </Router>
    )
}