import React from 'react'

const Contact = () => {
    return(
       <div className="sectionDiv" id="contact">
            <div className="contactTitle">
                <div className="contactLine1"></div>
                <h2><span className="number">04.</span>Get In Touch</h2>
                <div className="contactLine2"></div>
            </div> 
            <form action="mailto:laylasouthcombe789@outlook.com" method="post" enctype="text/plain" className="contactForm">
                <input type="text" name="fullName" id="fullName" placeholder="Full name" className="formItem1"/>
                <input type="email" name="email" id="email" placeholder="Email address" className="formItem2"/>
                <input type="tel" name="phoneNum" id="phoneNum" placeholder="Phone number" className="formItem3"/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className="formItem4"></textarea >
                <input type="submit" className="sendEmail formItem5" value="SEND" />
            </form>
       </div>   
    )
}

export default Contact;