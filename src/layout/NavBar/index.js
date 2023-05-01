import React, { useState } from 'react'
import { Link } from "react-scroll";
import logo from '../../images/logo.png'

const NavBar = ({setBodyClass, setzIndex, aboutOnClickRef, projectsOnClickRef, skillsOnClickRef, contactOnClickRef}) => {
    const [sideModalClassName, setSideModalClassName] = useState("sideModal")
    const [iconImg, setIconImg] = useState("fa fa-bars")
    const [iconClassName, setIconClassName] = useState("navIcon navIconBorder")

    const scrollEffect = (targetRef) => {
        const headerElement = document.querySelector("header");
        const navStyles = window.getComputedStyle(headerElement)
        const headerMargin = parseInt(navStyles.marginTop) + parseInt(navStyles.marginBottom)
        const y = headerElement.offsetHeight + headerMargin 
        targetRef.current.style.scrollMargin = y + "px"
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        openCloseSideNav()
    }

    const openCloseSideNav = () => {
        if (sideModalClassName.includes("visibleModal")) {
            setSideModalClassName("sideModal hiddenModal")
            setIconImg("fa fa-bars")
            setIconClassName("navIcon navIconBorder")
            setBodyClass("visibleBody")
            setzIndex("0")
        } else {
            setSideModalClassName("sideModal visibleModal")
            setIconImg("fa-solid fa-xmark")
            setIconClassName("navIcon")
            setBodyClass("blurredBody")
            setzIndex("-1")
        }
    }
    
    return (
        <>
            <div className="topnav">
                <div className="topNavLogo">
                    <img src={logo} alt="" />
                </div>
                <ul className="navBar" id="myLinks">
                    <li><Link activeClass="active" smooth spy to="about" offset={-180}><span className="number">01.</span> About</Link></li>
                    <li><Link activeClass="active" smooth spy to="skills" offset={-180}><span className="number">02.</span> Skills</Link></li>
                    <li><Link activeClass="active" smooth spy to="projects" offset={-180}><span className="number">03.</span> Projects</Link></li>
                    <li><Link activeClass="active" smooth spy to="contact" offset={-200}><span className="number">04.</span> Contact Me</Link></li>
                    <li id="topNavResumeLi"><a href="https://docdro.id/7tZcCZL" target="_blank" rel="noreferrer" id="topNavResume">RESUME</a></li>
                </ul>
            </div>
            <div className="sidenav">
                <div className="navLogo">
                    <img src={logo} alt="" />
                </div>
                <button className={"navIcon"} onClick={openCloseSideNav}>
                    <i className={"fa fa-bars"}></i>
                </button>
            </div>
            <div className={sideModalClassName}>
                <div className="navIconContainer">
                <button className={"navIcon navIconSideModal"} onClick={openCloseSideNav}>
                        <i className={"fa-solid fa-xmark"}></i>
                    </button>
                </div>
                <ul className="sideNavBar">
                    <li onClick={() => scrollEffect(aboutOnClickRef)}><span className="number">01.</span>About</li>
                    <li onClick={() => scrollEffect(skillsOnClickRef)}><span className="number">02.</span>Skills</li>
                    <li onClick={() => scrollEffect(projectsOnClickRef)}><span className="number">03.</span>Projects</li>
                    <li onClick={() => scrollEffect(contactOnClickRef)}><span className="number">04.</span>Contact</li>
                    <li><a href="https://docdro.id/7tZcCZL" target="_blank" rel="noreferrer" id="sideBarResume">RESUME</a></li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;