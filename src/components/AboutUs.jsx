import React from 'react'
import { motion } from "framer-motion"
import meter from '../images/meter.jpg'
import student from '../images/university-student.jpg'
import mission from '../images/black-woman-tech.jpg'
import money from '../images/lawyer-payment-methods.png'
import GWC from '../images/GWC.jpg'
import electric from '../images/electric.jpg'
import british from '../images/bg-logo.jpg'
import edf from '../images/edf-logo.jpg'
import water from '../images/water-thames.jpg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, fa1, fa2, fa3)



function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100vh' }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.div class="intro-sustania">
        <h1 class="intro" >Who is Sustania ?</h1>
        <p className="intro-description">"Driven by Innovation, Fueled by Efficiency
          We stand at the forefront of utility management, channeling our efforts solely into perfecting this space. Every feature and service we offer is crafted to empower the millions managing utilities, ensuring a seamless, worry-free experience in their daily lives."</p>
      </motion.div>
      <div className='container'>
        <div className="row mission-statement">
          <motion.div className="col-md-6">
            <img src={mission} className="img-fluid pic mission" alt="Testimonial" />
          </motion.div>

          <div className="col-md-6">
            <h1 className="font-weight-bold">Our Mission </h1>
            <h5 className='energy-management'>At Sustania our mission is to empower individuals and households to take control of their utility expenses through innovative and user-friendly solutions. We are committed to providing a seamless, data-driven experience that not only simplifies the management of utility bills but also fosters a culture of sustainable and efficient energy usage.</h5>
          </div>
        </div>
        <div className="row testimonial-student">
          <div className="col-md-6 student-pic ">
            <blockquote>
              <h4 className='energy-management'>"I've been using Sustania for the past six months, and it has completely transformed the way I manage my utility bills. Before, keeping track of multiple bills and due dates was a constant hassle. With Sustania, everything is centralized and effortlessly organized."</h4>
              <footer><strong> Ama,</strong>University of Ghana Student</footer>
            </blockquote>
          </div>
          <motion.div animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }} className="col-md-6"  >
            <img src={student} alt="Picture 1" className="img-fluid pic student" />
          </motion.div>
        </div>
        <div className='row big-companies'>
          <h3 className='sustania-icons' style={{ marginBottom: '50px' }}>The world's best product teams trust Sustania to deliver an unrivaled experience for both developers and users.</h3>
          <div className="col-md-12 energy-stuff">
            <div className="card" style={{ width: '18rem', border: 'none' }}>
              <img src={electric} className='company-logo' />
            </div>
            <div className="card" style={{ width: '18rem', border: 'none' }}>
              <img src={GWC} className='company-logo' />
            </div>
            <div className="card" style={{ width: '18rem', border: 'none' }}>
              <img src={edf} className='edf-logo' />
            </div>
            <div className="card" style={{ width: '18rem', border: 'none' }}>
              <img src={water} className='water-logo' />
            </div>
            <div className="card" style={{ width: '18rem', border: 'none' }}>
              <img src={british} className='british-logo' />
            </div>
          </div>
        </div>
        <div className='row '>
          <h3 className='sustania-icons' style={{ marginBottom: '50px' }}>Utility bill management Made Easy! Follow the steps below to get started</h3>
          <div className="col-md-12 guide">
            <div className="card view" style={{ width: '18rem', border: 'none', marginRight: '550px' }}>
              <div className='tech-brands'><FontAwesomeIcon icon={fa1} beat style={{ color: "#013b30", }} size="6x" />
              </div>
              <div className="card-body">
                <h3 class="card-title">Move to DashBoard in the Navbar</h3>
                <p className="card-text" style={{   fontWeight: 'bold', fontSize:'large'}}>
                  The dashboard provides an overview of your utility usage and cost trends.</p>

              </div>

            </div>
            <div className="card view" style={{ width: '18rem', border: 'none', marginLeft: '550px' }}>
              <div className='tech-brands'>
                <div className='tech-brands'><FontAwesomeIcon icon={fa2} beat style={{ color: "#013b30", }} size="6x" />
              </div>
              </div>
              <div className="card-body">
              <h3 class="card-title"> Add a New Utility Bill</h3>
<p className="card-text" style={{   fontWeight: 'bold', fontSize:'large'}}>
Click on the "Add Bill" or "New Entry" button to input a new utility bill.
Select the utility type (e.g., electricity, water) and enter the bill amount.Optionally, input additional details such as the billing period or any notes related to the bill.</p>
              </div>
            </div>
            <div className="card view" style={{ width: '18rem', border: 'none', marginRight: '350px' }}>
              <div className='tech-brands'><div className='tech-brands'><FontAwesomeIcon icon={fa3} beat style={{ color: "#013b30", }} size="6x" />
              </div>
              </div>
              <div className="card-body">
              <h3 class="card-title"> Track Monthly Savings</h3>
              <p className="card-text" style={{   fontWeight: 'bold', fontSize:'large'}}>On the dashboard, find a section displaying your monthly savings.
This section should show the total monthly electricity savings and water savings.
Monitor how your efforts in conserving energy and water contribute to savings over time.</p>

              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default AboutUs

{/* <div className="row usage">
<h3 className='sustania-icons' style={{  marginBottom:'50px'}}>Cleverly designed, Sustania goes beyond typical utility management apps—preventing financial loss by optimizing your consumption and fostering a sustainable future.</h3>
<motion.div className="col-md-6">
    <h1 className="font-weight-bold">Simple to use </h1>
  <h5 className='energy-management '>Whether you've paid in person, via bank transfer, or through supported apps like ExpressPay, simply input the payment amount from your receipt into the dashboard.</h5>
</motion.div>

<div className="col-md-6">
<img src={money} className="img-fluid pic money" alt="Testimonial" />
</div>
</div> */}


