import React from "react";
import Shapes from "../Components/Shapes";

function Home(){
    return (
        <div className="homecontainer">
            <div className="leftcontainer">
                <div className="leftinnercontianer">
                    <div className="left_content">
                       <p>Let's <span className="create">CREATE</span> the things you <span className="wished">wished</span></p>
                       <span className="Existed">Existed.</span>
                    </div>
                    <div className="letsbtn">LET'S TALK</div>
                </div>

            </div>
            <div className="rightcontainer">
                <div className="imageconatiner">
                     <div className="manimage">
                         <img src={require('../images/pose06_male.png')}  alt="manpose"></img>
                     </div>
                </div>
                <div className="shapecontainer">
                    <Shapes/>
                </div>

            </div>
            
        </div>
    )
}

export default Home;