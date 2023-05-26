import React from 'react'

const Contact = ({zIndex, innerRef}) => {
    return (
       <div className="sectionDiv" id="contact" ref={innerRef}>
            <div className="contactTitle">
                <div className="lineType2 line"></div>
                <h2><span className="number">04.</span> Get In Touch</h2>
                <div className="lineType3 line"></div>
            </div> 
            {/* <form action="mailto:laylasouthcombe789@outlook.com" method="post" encType="text/plain" className="contactForm" autoComplete="off"> */}
            <form method="POST" encType="text/plain" className="contactForm" autoComplete="off" name="contactForm" data-netlify="true" netlify>
                <input type="text" name="fullName" id="fullName" placeholder="Full name" className="formItem1" style={{zIndex: zIndex}} required/>
                <input type="email" name="email" id="email" placeholder="Email address" className="formItem2" style={{zIndex: zIndex}} required/>
                <input type="number" name="phoneNum" id="phoneNum" placeholder="Phone number" className="formItem3" style={{zIndex: zIndex}}/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className="formItem4" spellCheck="true" style={{zIndex: zIndex}} minLength="5" required></textarea>
                <input type="submit" className="sendEmail formItem5" value="SEND" />
            </form>
       </div>   
    )
}

export default Contact;