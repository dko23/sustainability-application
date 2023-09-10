import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Button from '@mui/material/Button';
import EditAction from '../components/EditAction'
import { deleteAction, setData, getAction} from '../features/postSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useEffect } from 'react';
import { motion } from "framer-motion"



function ActionList() {
  const posts = useSelector((state) => state.post); // Read and subscribe to the state value from the store
  console.log(useSelector((state) => state.post))


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };//////////////////////////////////////////////////////////////////

  const style1 = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

    const dispatch = useDispatch();
    
  // const removeAction = (id) => {
  //       dispatch(
  //           deleteAction(
  //             id
  //           )
  //       );
  //   };


    const removeAction = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/delete/${id}`);
        dispatch(
          deleteAction(
            id
          )
      );
      } catch (error) {
        // Handle any error that occurred during the request
      }
    };
  
  


  const [open, setOpen] = useState(false);
  const [preFill, setPreFill] = useState(null);
  const handleOpen = (post) => {
    setOpen(true);
    setPreFill(post);
  }
  const handleClose = () => setOpen(false) 

  const fetchData = async () => {
    try {
      // Make a GET request to your Node.js server to fetch data from MongoDB
      const response = await axios.get('http://localhost:5000/getbill');
      // dispatch(setData(response.data)); // Dispatch the setData action to set the fetched data in Redux state
      dispatch(getAction(response.data))
    } catch (error) {
      // Handle any error that occurred during the request
      console.error('Error fetching data from server', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
      <>
           <div>
           {posts.map((post) => (
  <List sx={style1} component="nav" aria-label="mailbox folders" key={post.id} className='bill-list'>
    <ListItem button>
      {/* <h3 className="card-title">Action: {post.action}</h3> */}
    </ListItem>
    <Divider />
    <ListItem button divider>
      <p>Month: {post.month}</p>
    </ListItem>
    <ListItem button>
      <p>Electricity Bill: {post.electricity}</p>
    </ListItem>
    <Divider light />
    <ListItem button>
      <p>Water Bill: {post.water}</p>
    </ListItem>
    <ListItem button>
      <p>Date: {post.actionDate}</p>
    </ListItem>
               <motion.div className='button-icon'   whileHover={{
        scale: 1.2,
        transition: { yoyo: Infinity },
    }}>
               <EditIcon variant="contained" type="button" onClick={() => handleOpen(post)} />
    <DeleteIcon variant="contained" type="button" onClick={() => removeAction(post.id)} />
    </motion.div>
  </List>
))}

      </div>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        {<EditAction prefill={preFill} closeModal={handleClose}/> }
          
        </Typography>
      </Box>
    </Modal>
      </>
  );
}

export default ActionList;


























// {posts.map((post) => (
//   <div key={post.id} className="card">
//     <div className="card-content">
//             {/* <h3 className="card-title">Action: {post.action}</h3> */}
//             <p>Month: {post.month}</p>
//             <p>Electricity Bill: {post.electricity}</p>
//             <p>Water Bill: {post.water}</p>
//       <p>Date: {post.actionDate}</p>
//       <EditIcon variant="contained" type="button" onClick={()=>handleOpen(post)}/>
//       <DeleteIcon variant="contained" type="button" onClick={() => removeAction(post.id)} />
    
//     </div>
//   </div>
// ))}