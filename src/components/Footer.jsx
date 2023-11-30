import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faXTwitter, faFacebook, faLinkedin)


function Footer() {
  return (
    <div>
      <div className="main-footer">
          <div className="sustania-logos">
            <ul className='foot'>
            <li style={{  marginBottom:'30px',  fontSize:'39px'}}>Sustania</li>
              <li style={{  marginBottom:'30px'}}><p className="text-center">&copy; 2023 Sustania ||| (GH) Ltd. All Rights Reserved.</p></li>
            </ul>
            <div className='brands'>
                  <div className='tech-brands' style={{  marginBottom:'20px'}}><FontAwesomeIcon icon="fa-brands fa-x-twitter" size="2x"/></div>
                          <div className='tech-brands' style={{  marginBottom:'20px'}}><FontAwesomeIcon icon="fa-brands fa-facebook" size="2x"/></div>
                          <div className='tech-brands' style={{  marginBottom:'20px'}}><FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x"/></div>
        </div>
          </div>
          <div className="sustania-foot">
            
            <ul className='foot'>
              <li style={{  marginBottom:'20px'}}>Policies</li>
              <li style={{  marginBottom:'20px'}}>Privacy Policy</li>
              <li style={{  marginBottom:'20px'}}>Terms of Use</li>
            </ul>
        </div>

      </div>
      
      </div>
  );
}

export default Footer;

<div>

</div>