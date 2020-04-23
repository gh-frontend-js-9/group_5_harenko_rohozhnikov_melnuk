import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogPage from './blogPage/blogPage'
import PostPage from './postPage/postPage'
import AutherPage from './autherPage/autherPage'

export default function RouteMap() {
    return (
        <Router>
            <Switch>
                <Route path="/post" component={PostPage}/>
                <Route path="/auther" component={AutherPage}/>
                <Route path="/" component={BlogPage}/>
            </Switch>
        </Router>
    )
}