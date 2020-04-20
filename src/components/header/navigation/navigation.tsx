import React from 'react'
import './navigation.scss'

export class Navigation extends React.Component<any> {
    render() {
        return (
            <ul className="menu flex-sa" style={this.props.display} >
                <li className="menu__item">
                    <a className="menu__link" href="/popular">Popular</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/new">New</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/post">Post</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/readinglist">Reading list</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/topics">Topics</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/subscribe">Subscribe</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/author">Author</a>
                </li>
            </ul>
        )
    }
}

export default Navigation;