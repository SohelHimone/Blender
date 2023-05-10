import React from "react";
import Fintech from "../Components/Fintech";

function Blogs(){
    return (
        <div className="blogcontainer">
            <div className="serviceheading">
            <div className="blogheading">
                <span>Blogs</span>
                </div>
            </div>
            <div className="bloginner">
                <div className="fintech">
                    <div className="fintechinner">
                         <Fintech/>
                         <Fintech/>
                         <Fintech/>
                         <Fintech/>
                    </div>

                </div>
                <div className="readbtn">
                        <div className="readmorebtn">
                            Read More
                        </div>
                </div>
                <div className="blogbottom">
                    <div className="bottominnerblog"> 
                         <div className="blogbottomcontent">
                              <div className="blogbottomimg">
                                     <img src={require('../images/image 1882.png')} alt="blogimage"></img>  
                              </div>
                              <div className="blogspan">
                                <span>Partnership Opportunities</span>
                              </div>
                             

                         </div>
                         <div className="blogbottomcontent">
                              <div className="blogbottomimg">
                                     <img src={require('../images/1001.png')} alt="blogimage"></img>  
                              </div>
                              <div className="blogspan">
                                 <span>Changing Jobs ?</span>
                              </div>
                              

                         </div>
                         <div className="blogbottomcontent">
                              <div className="blogbottomimg">
                                     <img src={require('../images/1-QbM6R-atp-transformed 1.png')} alt="blogimage"></img>  
                              </div>
                              <div className="blogspan">
                              <span>Recent Graduate ?</span>
                              </div>

                         </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Blogs;