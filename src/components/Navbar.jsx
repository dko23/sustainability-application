import React from 'react'
import { Link } from 'react-router-dom';
import recycle from '../images/recycle.jpg'


function Navbar() {
  return (
      <div className='header'> 
   <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-white rounded  ">
    <div class="container">
                  <div className='box'>
                  <a class="navbar-brand">Sustainia</a><Link to="/"><img src={recycle} className='logo' /></Link>
                 </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
           <Link to="/"><a class="nav-link active" aria-current="page">Home</a></Link>  
              </li>
              <li class="nav-item">
          <Link to='./AboutUs'><a class="nav-link" href="aboutus">Why Sustania</a></Link> 
          </li>
          <li class="nav-item">
          <Link to='./Dash'><a class="nav-link" href="#">Dash Board</a></Link> 
          </li>
        </ul>
      </div>
        </div>
       
  </nav>
      </div>
  )
}

export default Navbar
