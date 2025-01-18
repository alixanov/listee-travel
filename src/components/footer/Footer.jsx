import React from 'react';
import './footer.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/intsgram.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
     return (
          <footer className="footer__container">
         
            
               <div className="footer__links">
                    <div className="footer__section">
                         <h3>Listee Travel</h3>
                         <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                         <div className="footer__social">
                              <img src={facebook} alt="Facebook" />
                              <img src={instagram} alt="Instagram" />
                              <img src={youtube} alt="YouTube" />
                              <img src={twitter} alt="Twitter" />
                         </div>
                    </div>
                    <div className="footer__section">
                         <h4>About</h4>
                         <ul>
                              <li>Menu</li>
                              <li>Features</li>
                              <li>News & Blogs</li>
                              <li>Help & Supports</li>
                         </ul>
                    </div>

                    <div className="footer__section">
                         <h4>Company</h4>
                         <ul>
                              <li>How we work</li>
                              <li>Terms of service</li>
                              <li>Pricing</li>
                              <li>FAQ</li>
                              <li>Contact Us</li>
                         </ul>
                    </div>

                    <div className="footer__section">
                         <h4>Contact Us</h4>
                         <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                         <p>+1 202-918-2132</p>
                         <p>listeetravel@mail.com</p>
                         <p>www.listeetravel.com</p>
                    </div>
               </div>

       
          </footer>
     );
};

export default Footer;
