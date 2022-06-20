import React from 'react'
import { Link } from "react-scroll";

const NavBar = () => {
    return(
    <div className="nav">
        <nav className="navBar">
            <ul>
                <li><Link activeClass="active" smooth spy to="about">About</Link></li>
                <li><Link activeClass="active" smooth spy to="skills">Skills</Link></li>
                <li><Link activeClass="active" smooth spy to="projects">Projects</Link></li>
                <li><Link activeClass="active" smooth spy to="contact">Contact Me</Link></li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar;