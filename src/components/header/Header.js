import React from "react";
import {NavLink} from "react-router-dom"

export default function Header() {
    return (

            <nav className="navbar navbar-light light-blue lighten-4">
                <NavLink className="navbar-brand" to="/"><h1>Project MyCV</h1></NavLink>
                <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fas fa-bars fa-1x" /></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home"><h6>Home</h6></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/programming"><h6>Programming skill</h6></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/t13h06t95/Project_MyCV"><h6>MyCV source code</h6></a>
                        </li>
                    </ul>
                </div>
            </nav>

    )
}
