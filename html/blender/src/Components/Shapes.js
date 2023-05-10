import React from "react";

function Shapes(){
    return(
        <>
        <div className="first">
          <div className="firstimg">
              <img src={require('../images/Rectangle 25.png')} alt="firstimg"></img>
          </div>
        </div>
        <div className="second">
        <div className="secondimg">
              <img src={require('../images/Rectangle 23.png')} alt="secondimg"></img>
          </div>
        </div>
        <div className="third">
            <div className="firstthird">
               <img src={require('../images/Ellipse 34.png')} alt="firstthird img"></img>
            </div>
            <div className="secondthird">
               <div className="secondthirdinner">
                    <img src={require('../images/Ellipse 35.png')} alt="secondthirdinner img"></img>
               </div>
               <div className="secondthirdinner">
                    <img src={require('../images/Rectangle 21.png')} alt="secondthirdinner img"></img>
               </div>
            </div>
            <div className="firstthird">
               <img src={require('../images/Rectangle 16.png')} alt="firstthird img"></img>
            </div>
        </div>
        </>
    )
}

export default Shapes;