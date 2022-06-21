import React from 'react'
import { Link } from "react-scroll";

const NavBar = () => {
    return(

        <nav >
            <ul className="navBar">
                <li><Link activeClass="active" smooth spy to="about"><span className="number">01.</span> About</Link></li>
                <li><Link activeClass="active" smooth spy to="skills"><span className="number">02.</span> Skills</Link></li>
                <li><Link activeClass="active" smooth spy to="projects"><span className="number">03.</span> Projects</Link></li>
                <li><Link activeClass="active" smooth spy to="contact"><span className="number">04.</span> Contact Me</Link></li>
            </ul>
        </nav>

    )
}

export default NavBar;