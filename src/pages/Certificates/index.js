import React, { useState } from 'react';

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

    let certificates = [ backEndCert, javascriptAlgoCert, frontEndCert, responsiveWebCert, FullStackBootcamp, javascriptCert, htmlCert]
    
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: windowSize >= 768 ? 2 : 1,
        speed: 500,
        dots: true
    }
    
    window.addEventListener('resize', (e) => {
        setWindowSize(window.innerWidth)
    })

    return (
        <>
            <div className="sectionDiv" id="certificates" ref={innerRef}>
                <div className="certsTitle">
                    <div className="lineType2 line"></div>
                    <h2><span className="number">04.</span> Certificates </h2>
                    <div className="lineType3 line"></div>
                </div>
                <div className="certsCarouselWrapper">
                    <Slider {...settings}>
                        {certificates.map(cert => (
                            <div className="certificate">
                                <img src={cert} alt="certificate"/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Certificates