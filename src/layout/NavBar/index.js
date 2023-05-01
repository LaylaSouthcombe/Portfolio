import React, { useState } from 'react'
import { Link } from "react-scroll";

const NavBar = ({setBodyClass, setzIndex}) => {
    const [display, setDisplay] = useState("none")
    const [iconImg, setIconImg] = useState("fa fa-bars")
    const [iconClassName, setIconClassName] = useState("navIcon navIconBorder")

    const openSideNav = (e) => {
        e.preventDefault()
        if (display === "block") {
            setDisplay("none");
            setIconImg("fa fa-bars")
            setIconClassName("navIcon navIconBorder")
            setBodyClass("visibleBody")
            setzIndex("0")
        } else {
            setDisplay("block");
            setIconImg("fa-solid fa-xmark")
            setIconClassName("navIcon")
            setBodyClass("blurredBody")
            setzIndex("-1")
        }
    }
    
    return (
        <>
            <div className="topnav">
                <div className="logo">
                    <div className="square1"></div>    
                    <div className="square2"></div>    
                    <div className="square3"></div>    
                    <p className="logoText">LS</p> 
                </div>
                <ul className="navBar" id="myLinks" >
                    <li><Link activeClass="active" smooth spy to="about" offset={-180}><span className="number">01.</span> About</Link></li>
                    <li><Link activeClass="active" smooth spy to="skills" offset={-180}><span className="number">02.</span> Skills</Link></li>
                    <li><Link activeClass="active" smooth spy to="projects" offset={-180}><span className="number">03.</span> Projects</Link></li>
                    <li><Link activeClass="active" smooth spy to="contact" offset={-180}><span className="number">04.</span> Contact Me</Link></li>
                    <li id="topNavResumeLi"><a href="https://docdro.id/9LPsMmD" target="_blank" rel="noreferrer" id="topNavResume">RESUME</a></li>
                </ul> 
            </div>
            <div className="sidenav">
                <div className="logo">
                    <div className="square1">
                    </div>    
                    <div className="square2">
                    </div>    
                    <div className="square3">
                    </div>    
                    <p className="logoText">LS</p> 
                </div>
                <button className={iconClassName} onClick={openSideNav}>
                    <i className={iconImg}></i>
                </button>
            </div>
            <div className="sideModal" style={{display: display}}>
                <ul className="sideNavBar" >
                    <li><Link activeClass="active" smooth spy to="about" offset={-200}><span className="number">01.</span> About</Link></li>
                    <li><Link activeClass="active" smooth spy to="skills" offset={-230}><span className="number">02.</span> Skills</Link></li>
                    <li><Link activeClass="active" smooth spy to="projects" offset={-320}><span className="number">03.</span> Projects</Link></li>
                    <li><Link activeClass="active" smooth spy to="contact" offset={-420}><span className="number">04.</span> Contact <span className="me">Me</span></Link></li>
                    <li><a href="https://docdro.id/9LPsMmD" target="_blank" rel="noreferrer" id="sideBarResume">RESUME</a></li>
                </ul> 
            </div>
            </>
    )
}

export default NavBar;