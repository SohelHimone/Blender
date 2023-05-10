import React from "react";
import ContactFrom from "../Components/ContactFrom";


function Contact(){
    return (
        <div className="ContactContainer"> 
            <div className="contactinner">
                <div className="mapcontainer">
                  <div className="mapimg">
                      <img src={require('../images/Screenshot (82) 1.png')} alt="mapimg"></img>
                  </div>
                </div>
                <div className="formconatiner">
                     <ContactFrom/>
                </div>
            </div>
        </div>
    )
}

export default Contact;