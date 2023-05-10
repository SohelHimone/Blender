import React from "react";

function About(){
    return (
        <div className="Aboutcontainer">
            <div className="serviceheading">
            <div className="software">
                <span>About AI BLENDER</span>
                </div>
            </div>
            <div className="aboutinner">
                 <div className="aboutcontent">
                    <div className="content">
                     <p>Development of digital solutions for new and established companies | 
                        Microsoft Gold Certified Partner.</p>

                       <p>A cutting-edge software company called AI Bender creates digital goods for 
                        new and existing companies. We are masters at comprehending the goals and requirements 
                        of the client, whether it be for application development or UX/UI design. </p>

                       <p>We can produce a wide range of digital products thanks to our organised and expert approach. We are experts at maintaining existing code as well as creating brand-new systems. We provide services for the entire product life-cycle 
                        (functional analysis, UX, design, architecture, development, manual and automated testing, DevOps and maintenance).</p> 

                    </div>
                 </div>
                 <div className="Aboutscreen">
                     <div className="aboutimg">
                        <img src={require('../images/Screenshot 2022-12-17 at 13.54 1.png')} alt="aboutimg"></img>
                     </div>
                 </div>
            </div>
            
        </div>
    )
}

export default About;