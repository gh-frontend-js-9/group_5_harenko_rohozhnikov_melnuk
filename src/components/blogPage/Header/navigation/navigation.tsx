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
                    <Link to="/post" className="menu__link">Post</Link>
                </li>
                <li className="menu__item">
                    <Link to="/auther" className="menu__link">Author</Link>
                </li>
            </ul>
        )
    }
}