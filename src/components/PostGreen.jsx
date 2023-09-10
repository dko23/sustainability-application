import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { actionAdded } from '../features/postSlice'
import { motion } from "framer-motion"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import TextField from '@mui/material/TextField';
import axios from 'axios';// communicate with the server


function PostGreen() {
  const [month, setMonth] = useState('');
  const [electricity, setElectricity] = useState(0);
  const [water, setWater] = useState(0);
  const [action, setAction] = useState('');
  const [actionDate, setActionDate] = useState('');


  const dispatch = useDispatch()

 
  
  // const saveAction = () => {
  //   dispatch(
  //     actionAdded({
  //       id: nanoid(),
  //       month,
  //       electricity,
  //       water,
  //       action,
  //       actionDate,



  //     })
  //   );
  // };// save for later

  const saveAction = async () => {
    try {
      const response = await axios.post('http://localhost:5000/postbill', {
        month,
        electricity,
        water,
        action,
        actionDate,
      });
  
      const newBill = response.data; // Extract the newly created bill from the response
  
      // Dispatch the action to update Redux store with the newly created bill
      dispatch(
        actionAdded({
          id: newBill._id, // Use the generated _id from the response
          month: newBill.month,
          electricity: newBill.electricity,
          water: newBill.water,
          action: newBill.action,
          actionDate: newBill.actionDate,
        })
      );
    } catch (error) {
      // Handle any error that occurred during the request
      console.error('Error creating bill', error);
    }
  };
  


  // const saveAction = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/postbill', {
  //       month,
  //       electricity,
  //       water,
  //       action,
  //       actionDate,
  //     });
  
  //     const newBill = response.data; // Newly created bill's data from server response
  
  //     // Dispatch the action to update Redux store with the new bill's data
  //     dispatch(actionAdded(newBill));
  //   } catch (error) {
  //     // Handle any error that occurred during the request
  //   }
  // };
  

  // const onMonthChanged = e => setMonth(e.target.value)
  // const onElectricityChanged = e => setElectricity(e.target.value)
  // const onWaterChanged = e => setWater(e.target.value)
  // const onActionChanged = e => setAction(e.target.value)
  // const onActionDateChanged = e => setActionDate(e.target.value)


  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  }

  return (
    <motion.div
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      
      >
      <>
        <form onSubmit={handleFormSubmit} className='action'>

          <div className='add'>
            <TextField id="outlined-basic" label="Month" variant="outlined" type="text"
              value={month}
              onChange={(event) => setMonth(event.target.value)} 
              required
              />
          </div>
          <div className='add'>
            <TextField id="outlined-basic" label="Electricity,&#8373;" variant="outlined" type="number"
              value={electricity}
              onChange={(event) => setElectricity(event.target.value)} 
              required />
          </div>


          <div className='add'>
            <TextField id="outlined-basic" label="Water, &#8373; " variant="outlined" type="number"
              value={water}
              onChange={(event) => setWater(event.target.value)} 
              required />
          </div>
          {/* <div>
              <TextField id="outlined-basic"
                label='notes'
                      value={action}
                      onChange={onActionChanged}  multiline
                fullWidth sx={{ width: 300 }} />     
              
  </div>
               */}

          <TextField
            id="outlined-basic"
            type="date"
            label="Action Date"
            value={actionDate}
            onChange={(event) => setActionDate(event.target.value)} 
            required
            InputLabelProps={{
              shrink: true,
            }}
          />


          <motion.div className='add'   whileHover={{
        scale: 1.2,
        transition: { yoyo: Infinity },
    }}>
            <AddCircleRoundedIcon variant="contained" type="button" onClick={saveAction} style={{ fontSize: "2rem" }} />
          </motion.div>
        </form>
      </>

    </motion.div>
  )
}

export default PostGreen


{/* <motion.button

        
        
/> */}