import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'

export class Navigation extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <ul className="menu flex-sa" style={this.props.display} >
                <li className="menu__item">
                    <Link to="/" className="menu__link">Blog</Link>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/">Author</a>
                </li>
            </ul>
        )
    }
}