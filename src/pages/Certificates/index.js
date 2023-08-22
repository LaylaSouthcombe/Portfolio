import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Certificate } from '../../components'
import backEndCert from '../../images/certificates/BackEndCert.png'
import frontEndCert from '../../images/certificates/FrontEndCert.png'
import htmlCert from '../../images/certificates/htmlCert.png'
import javascriptAlgoCert from '../../images/certificates/JavascriptAlgoCert.png'
import javascriptCert from '../../images/certificates/JavascriptCert.png'
import responsiveWebCert from '../../images/certificates/ResponsiveWebCert.png'

import './style.css'

const Certificates = ({innerRef}) => {

    let certificates = [ backEndCert, frontEndCert, javascriptAlgoCert,responsiveWebCert, javascriptCert, htmlCert]

    const [certIndex, setCertIndex] = useState(0)

    return (
        <>
            <div className="sectionDiv" id="certificates" ref={innerRef}>
                <div className="certCarouselWrapper">
                    <div className="certCarousel">
                        <div className="leftCertButton" onClick={() => setCertIndex(certIndex === 0 ? 0 : prev => prev -1)}>/</div>
                        <Certificate cert={certificates[certIndex]}/>
                        <div className="rightCertButton" onClick={() => setCertIndex(certIndex === certificates.length - 1 ? certificates.length - 1 : prev => prev +1)}>/</div>
                    </div>
                    <div className="carouselIndicators">
                        {certificates.map((cert, i) => <div className={certIndex === i ? "carouselIndicator activeIndicator" : "carouselIndicator"} onClick={() => setCertIndex(i)}></div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certificates