import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { editAction } from '../features/postSlice';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from 'axios';

function EditAction({ prefill, closeModal }) {
    const [state, setState] = useState({
        id: prefill.id,
        month: prefill.month,
        electricity:prefill.electricity,
        water: prefill.water,
        // action:prefill.action,
        actionDate: prefill.actionDate
    });
    const dispatch = useDispatch();
  

    const handleChange = (e) => {
        e.preventDefault()
        setState({ ...state, [e.target.name]: e.target.value });
      };
    
  //     const handleEdit = (e) => {
  //       // e.preventDefault()
  //       console.log(state)
  //       dispatch(editAction(state));
  //       closeModal();
  // };
  


  
  const handleEdit = async (id) => {
  
  };

  
const handleFormSubmit =async (event,id) => {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log(state);
  try {
    await axios.put(`http://localhost:5000/editbill/${prefill.id}`, state)
    dispatch(
      editAction(state))
   
  } catch (error) {
    // Handle any error that occurred during the request
  }
  }
  
  return (
      <div>
      
     <form onSubmit={handleFormSubmit}>  
              <div>
          <label>Month:</label>
          <div>
            <TextField
              type="text"
              id="postTitle"
              name="month"
              value={state.month}
              onChange={handleChange}
              label=""
              variant="standard"
              multiline
              fullWidth
              sx={{ width: 300 }}
            />
          </div>
        </div>

        <div>
          <label>Electricity:&#8373;</label>
          <div>
            <TextField
              type="number"
              id="postTitle"
              name="electricity"
              value={state.electricity}
              onChange={handleChange}
              label=""
              variant="standard"
              multiline
              fullWidth
              sx={{ width: 300 }}
            />
          </div>
        </div>

<div>
        <label>Water:&#8373;</label>
          <div>
            <TextField
              type="number"
              id="postTitle"
              name="water"
              value={state.water}
              onChange={handleChange}
              label=""
              variant="standard"
              multiline
              fullWidth
              sx={{ width: 300 }}
            />
          </div>
        </div>
          

        <div>
        <label>Action:</label>
          <div>
            <TextField
              type="text"
              id="postTitle"
              name="action"
              value={state.action}
              onChange={handleChange}
              label=""
              variant="standard"
              multiline
              fullWidth
              sx={{ width: 300 }}
            />
          </div>
        </div>
                  

        <div>
        <label>Action Date</label>
          <div>
            <TextField
              type="text"
              id="postTitle"
              name="actionDate"
              value={state.actionDate}
              onChange={handleChange}
              label=""
              variant="standard"
              multiline
              fullWidth
              sx={{ width: 300 }}
            />
          </div>
        </div>
        <Button variant="contained" type="submit"  >
          Edit Post
        </Button>
        </form>    
    
      </div >
  )
}
export default EditAction

