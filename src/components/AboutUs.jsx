import React from 'react'
import { motion } from "framer-motion"
import meter from '../images/meter.jpg'
import student from '../images/university-student.jpg'
import mission from '../images/black-woman-tech.jpg'
import money from '../images/lawyer-payment-methods.png'
import trackbill from '../images/track-bill.jpg'


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
            <div className="row testimonial-student">
              <div className="col-md-6 student-pic ">
              <blockquote>
  <h3 className='energy-management'>"I've been using Sustania for the past six months, and it has completely transformed the way I manage my utility bills. Before, keeping track of multiple bills and due dates was a constant hassle. With Sustania, everything is centralized and effortlessly organized."</h3>
  <footer><strong> Ama,</strong>University of Ghana Student</footer>
</blockquote>
                    </div>
              <motion.div animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }} className="col-md-6 student "  >
                <img src={student} alt="Picture 1" className="img-fluid pic" />
              </motion.div>
            </div>
            <div className="row mission-statement">
<motion.div className="col-md-6">
  <img src={mission} className="img-fluid pic mission" alt="Testimonial" />
</motion.div>

<div className="col-md-6">
<h1 className="font-weight-bold">Our Mission </h1>
            <h5 className='energy-management'>At Sustania our mission is to empower individuals and households to take control of their utility expenses through innovative and user-friendly solutions. We are committed to providing a seamless, data-driven experience that not only simplifies the management of utility bills but also fosters a culture of sustainable and efficient energy usage.</h5>
</div>
          </div>
          <div className="row usage">
<motion.div className="col-md-6">
              <h1 className="font-weight-bold">Simple to use </h1>
            <h5 className='energy-management '>Whether you've paid in person, via bank transfer, or through supported apps like ExpressPay, simply input the payment amount from your receipt into the dashboard.</h5>
</motion.div>

<div className="col-md-6">
<img src={money} className="img-fluid pic money" alt="Testimonial" />
</div>
          </div>
          <div className="row energy-meter">
<motion.div className="col-md-6">
  <img src={trackbill} className="img-fluid pic track-bill" alt="Testimonial" />
</motion.div>

<div className="col-md-6">
<h1 className="font-weight-bold" >Stay on top of your utility budget, monitor expenditures, and optimize your costs efficiently. </h1>

</div>
</div>
        </div>

        
        </motion.div>
    )
}

export default AboutUs




