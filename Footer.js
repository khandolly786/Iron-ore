import React from "react";
import './Footer.css';

const Footer = ()=>{
    return(

        <footer class="footer">
          <div class="footer-content">
            <p>&copy; 2025 Your Website. All rights reserved.</p>
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      
    );
};
export default Footer