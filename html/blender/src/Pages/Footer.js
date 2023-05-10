import React from "react";
import AiBlendarLogo from "../Components/Aiblenderlogo";
import FooterLeft from '../Components/Footerleft';
import FooterMiddle from '../Components/FooterMiddle';
import FooterRight from '../Components/FooterRight';
import FooterBottom from '../Components/FooterBottom';

function Footer(){
    return (
         <div className="footer">
            <div className="footer-logo">
             <AiBlendarLogo/>
            </div>
            <div className="footer-inner">
              <FooterLeft/>
              <FooterMiddle/>
              <FooterRight/>
              
            </div>
            <div className="bottom">
               <FooterBottom/>
            </div>
         </div>
    )
}

export default Footer;