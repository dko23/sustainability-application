import React from 'react'
import meter from '../images/meter.jpg'
import together from '../images/together.jpg'
import { motion } from "framer-motion"

function Home() {
  return (
      <motion.div  
      initial={{ opacity: 0, x: '-100vh' }}
      animate={{ opacity: 1, x: 0 }}>
             <div className="container">
          
          <motion.div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">#For A Greener Future</h1>
      
    </div>
  </motion.div>
            <div className="row energy-meter ">
              <div className="col-md-6 ">
            <h1 className="font-weight-bold">Energy-smart decisions for a sustainable lifestyle</h1>
            <p className='energy-management'>Embrace the power of data-driven energy management. By analyzing your energy patterns, the Smart Meter tailors personalized energy-saving tips, empowering you to take control of your consumption like never before.</p>
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
          </div>   
    </motion.div>
  )
}

export default Home


