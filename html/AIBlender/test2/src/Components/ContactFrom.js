import React from "react";

function ContactFrom(){
    return(
        <>
         <div className="forminner">
                <div className="form">
                    <input className="name" type="text" placeholder="Full Name"></input>
                    <input className="email" type="email" placeholder="Your Email"></input>
                    <textarea className="textarea" rows='2' cols='1' placeholder="Type your messege"></textarea>
                </div>
                <div className="submitbtn">
                    <div className="submitname">Submit</div>
                </div>
            <div className="contactdetails">
                <div className="contactspan">
                    <span>
                        +91 93541 43811
                    </span>
                </div>
                <div className="contactspan">
                    <span>
                       admin@aibender.co
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactFrom;