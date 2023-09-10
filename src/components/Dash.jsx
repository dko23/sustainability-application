import React from 'react'
import PostGreen from './PostGreen';
import WaterChart from './WaterChart';
import ActionList from './ActionList';
import { motion } from "framer-motion"

function Dash() {
  return (
          <>
          <motion.div className='container'initial={{ opacity: 0, x: '-100vh' }}
      animate={{ opacity: 1, x: 0 }}>
<div className='row '>
<div className="col-md-6 ">
    <WaterChart />
    <PostGreen/>
  </div>
  <div className="col-md-6 dash">
  <ActionList />
  </div>
    </div>
</motion.div>  
          </>
  )
}
export default Dash

