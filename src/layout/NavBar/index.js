import React, { useState } from 'react'
import { Link } from "react-scroll";
import logo from '../../images/logo.webp'
import { motion } from "framer-motion";

const NavBar = ({setBodyClass, aboutOnClickRef, projectsOnClickRef, skillsOnClickRef, certificatesOnClickRef}) => {
    const [sideModalClassName, setSideModalClassName] = useState("sideModal")

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
            setBodyClass("visibleBody")
        } else {
            setSideModalClassName("sideModal visibleModal")
            setBodyClass("blurredBody")
        }
    }

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Optional: Add smooth scrolling behavior
        });
      };
    
    return (
        <>
            <motion.div 
            initial={{ y: -100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="topnav">
                <div className="topNavLogo" onClick={handleScrollToTop}>
                    <img src={logo} alt="" />
                </div>
                <ul className="navBar" id="myLinks">
                    <li><Link activeClass="active" smooth spy to="about" offset={-180}><span className="number">01.</span> About</Link></li>
                    <li><Link activeClass="active" smooth spy to="skills" offset={-180}><span className="number">02.</span> Skills</Link></li>
                    <li><Link activeClass="active" smooth spy to="projects" offset={-180}><span className="number">03.</span> Projects</Link></li>
                    <li><Link activeClass="active" smooth spy to="certificates" offset={-180}><span className="number">04.</span> Certificates</Link></li>
                    <li id="topNavResumeLi"><a href="https://docdro.id/c2jJmN8" target="_blank" rel="noreferrer" id="topNavResume" aria-label="Link to download Layla Southcombe's CV">RESUME</a></li>
                </ul>
            </motion.div>
            <div className="sidenav">
                <div className="navLogo">
                    <img src={logo} alt="" />
                </div>
                <button className={"navIcon"} onClick={openCloseSideNav} aria-label="Open nav menu">
                    <i className={"fa fa-bars"}></i>
                </button>
            </div>
            <div className={sideModalClassName}>
                <div className="navIconContainer">
                <button className={"navIcon navIconSideModal"} onClick={openCloseSideNav} aria-label="Close nav menu">
                        <i className={"fa-solid fa-xmark"}></i>
                    </button>
                </div>
                <ul className="sideNavBar">
                    <li onClick={() => scrollEffect(aboutOnClickRef)}><span className="number">01.</span> About</li>
                    <li onClick={() => scrollEffect(skillsOnClickRef)}><span className="number">02.</span> Skills</li>
                    <li onClick={() => scrollEffect(projectsOnClickRef)}><span className="number">03.</span> Projects</li>
                    <li onClick={() => scrollEffect(certificatesOnClickRef)}><span className="number">04.</span> Certificates</li>
                    <li><a href="https://docdro.id/c2jJmN8" target="_blank" rel="noreferrer" id="sideBarResume" aria-label="Link to download Layla Southcombe's CV">RESUME</a></li>
                </ul>
            </div>
        </>
    )
}

export default NavBar