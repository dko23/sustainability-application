import React from 'react'
import { useSelector } from 'react-redux';


function Bills() {


  const posts = useSelector((state) => state.post); // Read and subscribe to the state value from the store
   
    
  function calculateMonthlySavings(posts) {
       
      let totalSavings = 0;
      
        for (let i = 1; i < posts.length; i++) {
          const currentBill = posts[i].electricity;
          const previousBill = posts[i - 1].electricity;
          const monthlySavings = previousBill - currentBill;
          totalSavings += monthlySavings;
        }
      
        return totalSavings;
      }




      function calculateMonthlySavings2(posts) {
        let totalSavings = 0;
      
        for (let i = 1; i < posts.length; i++) {
          const currentBill = posts[i].water;
          const previousBill = posts[i - 1].water;
          const monthlySavings = previousBill - currentBill;
          totalSavings += monthlySavings;
        }
      
        return totalSavings;
      }
      


       // Calculate monthly water savings
       const monthlyWaterSavings = calculateMonthlySavings2(posts);
    
      // Calculate monthly electricity savings
      const monthlyElectricitySavings = calculateMonthlySavings(posts);
      
    console.log(`Total monthly electricity savings: ${monthlyElectricitySavings}`);
    
  // color change of figures
  const electricitySavingsColor = monthlyElectricitySavings >= 0 ? 'green' : 'red';
  const waterSavingsColor = monthlyWaterSavings >= 0 ? 'green' : 'red';


  return (
      <div>
          <p>Total monthly electricity savings:<strong className={electricitySavingsColor} >&#8373;{monthlyElectricitySavings}</strong></p>
          <p>Total monthly water savings:<strong className={waterSavingsColor}>&#8373;{monthlyWaterSavings}</strong></p>   
    </div>
  )
}

export default Bills




