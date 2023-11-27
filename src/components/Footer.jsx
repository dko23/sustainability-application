import React from 'react';

function Footer() {
  return (
    <div>
      <div className="container-fluid main-footer">
        <div className="row footer">
          <div className="col-md-4 ">
            <ul className='foot'>
            <li>About Us</li>
              <li>About Sustania</li>
            </ul>
          </div>
          <div className="col-md-4">
            
            <ul className='foot'>
              <li>Policies</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className='foot'>
              <li>Customer Service</li>
              <li>FAQs</li>
              <li>ALERTS</li>
              <li>COVID-19 Measures</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-center">&copy; 2023 Sustania ||| (UK) Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;