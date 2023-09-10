import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'



    const dispatch = useDispatch()
    const user = useSelector(selectAllUser)
    
    const saveAction = () => {
        dispatch(
            actionAdded({
                id: nanoid(),
                action,
                actionDate,
                category
       
  
            })
        );
    };


function PostAction() {
const [action, setAction] = useState('');
const [actionDate, setActionDate] = useState('');
const [category, setCategory] = useState('');

    
const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create a goal object with the form input values
    const newAction = {
      action,
      actionDate,
      category
    };

    // Perform any additional actions with the new goal object
    console.log(newAction);

    // Reset the form fields
    setAction('');
    setActionDate('');
    setCategory("");

  };
  return (
      <div>
          <>
          <form onSubmit={handleFormSubmit}>
          <label>
        Description:
        <textarea
          value={action}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Action Date:
        <input
          type="date"
          value={actionDate}
          onChange={(e) => setTargetDate(e.target.value)}
          required
        />
                  </label>
                  <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            required
          >
            <option value="">Select Sustainable Action</option>
            <option value="energy">Energy Conservation</option>
            <option value="waste reduction">Waste Reduction and Recycling</option>
            <option value="recycle">Plastic Reduction</option>
            <option value="water">Water Conservation</option>
            <option value="green cleaning">Green Cleaning and Household Products</option>
            {/* Add more category options as needed */}
          </select>
        </label>
   <button type="submit" onClick={saveAction}>post Action</button>
    </form>   
          </>
    </div>
  )
}

export default PostAction