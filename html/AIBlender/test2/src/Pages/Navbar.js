import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import AiBlendarLogo from "../Components/Aiblenderlogo";


function Navbar(){
    return (
        <div className="nav-container">
            <AiBlendarLogo/>
           <div className="nav-list">
              <ul>
                <li>
                   <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                    Home
                    </Link>
                </li>
                <li>
                   <Link to='/About' style={{ color: 'white', textDecoration: 'none' }}>
                   About
                    </Link>
                </li>
                <li>
                   <Link to='/Services' style={{ color: 'white', textDecoration: 'none' }}>
                   Services
                    </Link>
                </li>
                
                <li>
                   <Link to='/Blogs' style={{ color: 'white', textDecoration: 'none' }}>
                   Blogs
                    </Link>
                </li>
                <li>
                   <Link to='/Contact' style={{ color: 'white', textDecoration: 'none' }}>
                   Contact
                    </Link>
                </li>
              </ul>
               
        </div>
        </div>
    )
}

export default Navbar;