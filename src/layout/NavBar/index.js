import React, { useState } from 'react'
import { Link } from "react-scroll";

const NavBar = ({setBodyBlur, setzIndex}) => {
    const [display, setDisplay] = useState("none")
    const [iconImg, setIconImg] = useState("fa fa-bars")
    const [iconClassName, setIconClassName] = useState("navIcon navIconBorder")

    const myFunction = () => {
        if (display === "block") {
            setDisplay("none");
            setIconImg("fa fa-bars")
            setIconClassName("navIcon navIconBorder")
            // setBodyBlur("none")
            setzIndex("0")
        } else {
            setDisplay("block");
            setIconImg("fa-solid fa-xmark")
            setIconClassName("navIcon")
            // setBodyBlur("blur(5px)")
            setzIndex("-1")
        }
      }
    
    return(

        <>
            <div className="topnav">
                <img id="logo" width="160px" height="160px" ></img>
                <ul className="navBar" id="myLinks" >
                    <li><Link activeClass="active" smooth spy to="about" offset={-180}><span className="number">01.</span> About</Link></li>
                    <li><Link activeClass="active" smooth spy to="skills" offset={-180}><span className="number">02.</span> Skills</Link></li>
                    <li><Link activeClass="active" smooth spy to="projects" offset={-180}><span className="number">03.</span> Projects</Link></li>
                    <li><Link activeClass="active" smooth spy to="contact" offset={-180}><span className="number">04.</span> Contact Me</Link></li>
                    <li id="topNavResumeLi"><button id="topNavResume">RESUME</button></li>
                </ul> 
            </div>
            <div className="sidenav">
                <img id="logo" width="160px" height="160px" ></img>
                <a href="javascript:void(0);" className={iconClassName} onClick={myFunction}>
                    <i className={iconImg}></i>
                </a>
            </div>
            <div className="sideModal" style={{display: display}}>
                <ul className="sideNavBar" >
                    {/* <li></li> */}
                    <li><Link activeClass="active" smooth spy to="about" offset={-200}><span className="number">01.</span> About</Link></li>
                    <li><Link activeClass="active" smooth spy to="skills" offset={-230}><span className="number">02.</span> Skills</Link></li>
                    <li><Link activeClass="active" smooth spy to="projects" offset={-320}><span className="number">03.</span> Projects</Link></li>
                    <li><Link activeClass="active" smooth spy to="contact" offset={-420}><span className="number">04.</span> Contact Me</Link></li>
                    <li><button id="sideBarResume">RESUME</button></li>
                </ul> 
            </div>
            </>
    )
}

export default NavBar;