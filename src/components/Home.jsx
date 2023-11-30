import React from 'react'
import meter from '../images/meter.jpg'
import together from '../images/together.jpg'
import { motion } from "framer-motion"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faClock,faBrain, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas,faXTwitter,faClock, faBrain, faLeaf)



function Home() {
  return (
      <motion.div  
      initial={{ opacity: 0, x: '-100vh' }}
      animate={{ opacity: 1, x: 0 }}>
                <motion.div class="jumbotron jumbotron-fluid">
      <h1 class="display-4">For A Greener Future</h1>
    
      </motion.div>
      
             <div className="container">
            <div className="row energy-meter ">
              <div className="col-md-6">
            <h1 className="font-weight-bold">Energy-smart decisions for a sustainable lifestyle</h1>
            <p className='energy-management'>Embrace the power of data-driven energy management. By analyzing your energy patterns, Sustania tailors personalized energy-saving tips, empowering you to take control of your consumption like never before.</p>
              </div>
  
              <motion.div animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }} className="col-md-6">
                <img src={meter} className="img-fluid pic" alt="Picture 1" />
          </motion.div>
          
        </div>
        
  
            <div className="row energy-meter">
              <motion.div className="col-md-6" whileHover={{
    scale: 0.5,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
                <img src={together} className="img-fluid pic" alt="Testimonial" />
              </motion.div>
  
              <div className="col-md-6">
                <h1 className="font-weight-bold">Shaping the world's energy future responsibly.</h1>
                <p className='energy-management'>Experience the joy of making conscious choices that leave a lasting imprint on the world. Together, we can reduce waste, conserve resources, and protect our natural habitats for generations to come. </p>
              </div>
        </div>
       
        <div className='row'> 
        <h3 className='sustania-icons' style={{  marginBottom:'50px'}}>Cleverly designed, Sustania goes beyond typical utility management apps—preventing financial loss by optimizing your consumption and fostering a sustainable future.</h3>
          <div className="col-md-12 energy-stuff">
        <div className="card" style={{ width: '18rem', border: 'none' }}>
<div className='tech-brands'><FontAwesomeIcon icon={faClock} size="6x" style={{color: "#013b30"}} />
</div>
<div className="card-body">
<p className="card-text">From timely reminders to optimize usage during off-peak hours, to eco-friendly choices that save both energy and money. </p>
</div>
          </div> 
          <div className="card" style={{ width: '18rem' , border: 'none'}}>
<div className='tech-brands'><FontAwesomeIcon icon={faBrain} size="6x" style={{color: "#013b30"}} />
</div>
<div className="card-body">

<p className="card-text">Harness the power of data-driven insights to optimize your utility consumption, ensuring a greener impact on the planet.</p>
</div>
          </div> 
          <div className="card" style={{ width: '18rem' , border: 'none'}}>
<div className='tech-brands'><FontAwesomeIcon icon={faLeaf} size="6x" style={{color: "#013b30"}} />
</div>
<div className="card-body">
<p className="card-text">our commitment to eco-friendliness resonates in every aspect of your utility bill experience. </p>

</div>
</div> 
          </div>          
    </div>  
      </div>   
      
    </motion.div>
    
  )
}

export default Home
