import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backEndCert from '../../images/certificates/BackEndCert.png'
import frontEndCert from '../../images/certificates/FrontEndCert.png'
import htmlCert from '../../images/certificates/htmlCert.png'
import javascriptAlgoCert from '../../images/certificates/JavascriptAlgoCert.png'
import javascriptCert from '../../images/certificates/JavascriptCert.png'
import responsiveWebCert from '../../images/certificates/ResponsiveWebCert.png'
import FullStackBootcamp from '../../images/certificates/FullStackBootcamp.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import './style.css'

const Certificates = ({innerRef}) => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)
    
    window.addEventListener('resize', (e) => {
        setWindowSize(window.innerWidth)
    })

    let certificates = windowSize >= 768 ? 
    [ javascriptAlgoCert, frontEndCert, responsiveWebCert, FullStackBootcamp, javascriptCert, htmlCert, backEndCert]
        :
    [ backEndCert, javascriptAlgoCert, frontEndCert, responsiveWebCert, FullStackBootcamp, javascriptCert, htmlCert]

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: windowSize >= 768 ? 2 : 1,
        speed: 500,
        dots: true
    }
    
    return (
        <>
            <div className="sectionDiv" id="certificates" ref={innerRef}>
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                variants={windowSize >= 768 ? 
                    {
                        visible: { x: 0, y: 0, opacity: 1 },
                        hidden: { x: 0, y: 200, opacity: 0 }
                    }
                    :
                    {
                        visible: { x: 0, y: 0, opacity: 1 },
                        hidden: { x: 200, y: 0, opacity: 0 }
                    }
                }
                className="certsTitle">
                    <div className="lineType2 line"></div>
                    <h2><span className="number">04.</span> Certificates </h2>
                    <div className="lineType3 line"></div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                variants={windowSize >= 768 ? 
                    {
                        visible: { x: 0, y: 0, opacity: 1 },
                        hidden: { x: 0, y: 200, opacity: 0 }
                    }
                    :
                    {
                        visible: { x: 0, y: 0, opacity: 1 },
                        hidden: { x: 200, y: 0, opacity: 0 }
                    }
                }
                className="certsCarouselWrapper">
                    <Slider {...settings}>
                        {certificates.map((cert, i) => (
                            <div className="certificate" key={"cert" + i}>
                                <img src={cert} alt="certificate"/>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </>
    )
}

export default Certificates