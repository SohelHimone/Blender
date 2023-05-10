import React from "react";

function Services(){
    return (
        <div className="servicescontainer">
            <div className="serviceheading">
                <div className="offer">
                <p>We offer best-in-class</p>
                </div>
                <div className="software">
                <span>Software Services</span>
                </div>
                

            </div>
            <div className="servicelogo">
                <div className="logoservice">
                    <div className="logoimg">
                       <img src={require('../images/monitor (1) 1.png')} alt="5"></img>
                    </div>
                    <div className="servicename">IoT</div>
                </div>
                <div className="logoservice">
                    <div className="logoimg">
                       <img src={require('../images/monitor (1) 2.png')} alt="5"></img>
                    </div>
                    <div className="servicename">Product Engineering</div>
                </div>
                <div className="logoservice">
                    <div className="logoimg">
                       <img src={require('../images/online-shop 1.png')} alt="5"></img>
                    </div>
                    <div className="servicename">E-Commerce Software</div>
                </div>
                <div className="logoservice">
                    <div className="logoimg">
                       <img src={require('../images/digitalization 1.png')} alt="5"></img>
                    </div>
                    <div className="servicename">Digital Experience</div>
                </div>
                <div className="logoservice">
                    <div className="logoimg">
                       <img src={require('../images/digitalization 3.png')} alt="5"></img>
                    </div>
                    <div className="servicename">Mobile Apps</div>
                </div>
                <div className="logoservice">
                    <div className="logoimg">
                       <img src={require('../images/digitalization 4.png')} alt="5"></img>
                    </div>
                    <div className="servicename">Software Testing & QA</div>
                </div>
                <div className="logoservice">
                    <div className="logoimg">
                       <img src={require('../images/devops 1.png')} alt="5"></img>
                    </div>
                    <div className="servicename">DevOps Service</div>
                </div>
                <div className="logoservice">
                    <div className="logoimg">
                       <img src={require('../images/ai 1.png')} alt="5"></img>
                    </div>
                    <div className="servicename">Artifical Intelligence</div>
                </div>


            </div>
            
        </div>
    )
}

export default Services;