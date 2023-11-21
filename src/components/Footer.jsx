import React from 'react';

function Footer() {
  return (
    <div>
      <div className="container-fluid main-footer">
        <div className="row footer">
          <div className="col-md-4 ">
            <h6>About US</h6>
            <ul className='foot'>
              <li>About Sustania</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Policies</h6>
            <ul className='foot'>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Customer Service</h6>
            <ul className='foot'>
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