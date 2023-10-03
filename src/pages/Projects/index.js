import React from 'react'
import { Project } from '../../components'
import { motion } from "framer-motion";
import sojoTravels from '../../images/sojoTravels.webp'
import rune from '../../images/rune.png'
import indee from '../../images/indee.webp'

const Projects = ({innerRef}) => {

    const projects = [
        { id: 1, appType: "Travel Article Site", projectName: "Sojo Travels", summary: "A React full-stack app with a PosetgreSQL database that provides a wide collection of travel articles about destinations in Europe", technologies: ["React", "HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "mui", "axios", "Jest", "React Testing Library"], github: [{ linkFor: "Back-end", link: "https://github.com/LaylaSouthcombe/travel-site-backend"}, { linkFor: "Front-end", link: "https://github.com/LaylaSouthcombe/travel-site-frontend"}], deploy: "https://sojo-travels.netlify.app/", img: sojoTravels},
        { id: 2, appType: "eCommerce Site", projectName: "Rune", summary: "A Next.js full-stack app with a MongoDB database, authentification, and Stripe payment integration for an eCommerce Site", technologies: ["Next.js", "HTML", "CSS", "axios", "JavaScript", "MongoDB", "bcrypt", "Styled Components", "Stripe", "mui"], github: [{ linkFor: "Front-end", link: "https://github.com/LaylaSouthcombe/fashion-site-frontend"}], deploy: "https://main--rune-store.netlify.app/", img: rune}
    ]

    return (
        <>
            <div className="sectionDiv" id="projects" ref={innerRef}>
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -200, opacity: 0 }
                }}
                className="projectsTitle">
                    <h2><span className="number">03.</span> Projects I've Built</h2>
                    <div className="lineType1 line"></div>
                </motion.div> 
                <Project position="right" content={projects[0]}/> 
                <Project position="left" content={projects[1]}/> 
                {/* <Project position="right" content={projects[2]}/>  */}
            </div>   
        </>
    )
}

export default Projects
