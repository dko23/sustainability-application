import { createSlice } from "@reduxjs/toolkit";
//// First things first, we create our initial state
// import { nanoid } from "@reduxjs/toolkit";
const initialState = [

  ];
  
  const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
      actionAdded: (state, action) => {
        state.push(action.payload)
      }, /// so the action defined here is the actionAdded and the aciton.payload is the new data that we want to push in this case. So, in summary, the usage of action.payload depends on the specific requirements of each action and reducer. If an action does not need any additional data, you can omit the action.payload and simply dispatch the action without passing any arguments.


      editAction: (state, action) => {
        console.log("edit clicked")
        return state.map((post) => post.id === action.payload.id ? action.payload : post); /// so the 'return' word produces a new array in this case. the payload is a reflection of the state.
    },

      deleteAction: (state, action) => {
        return state.filter((post) => post.id !== action.payload)
      },


      getAction: (state, action) => {
        return action.payload.map((post) => ({
          id: post._id,
          month: post.month,
          electricity: post.electricity,
          water: post.water,
          action: post.action,
          actionDate: post.actionDate 
        }));
      }
      

    }
})
// export const selectAllPost = (state) => state.post;/// we are creating the callback function(reference) used in the useSelector fucntion from the componnent in the case that the state from the slice changes and the state value is retrieved from the store.

export const { getAction, setData, actionAdded,editAction,deleteAction } = postSlice.actions
export default postSlice.reducer







  // {
   
  //   month: 'Jan',
  //   electricity: 4000,
  //   water: 500,
  //   action: "Today I didn't use as much energy as before",
  //   actiondate: '08/07/2023',
  // },
  // {
   
  //   month: 'feb',
  //   electricity:3000,
  //   water: 300,
  //   action: "Today I didn't use as much energy as before",
  //   actiondate: '08/07/2023',
  // },
  // {
   
  //   month: 'mar',
  //   electricity: 2000,
  //   water: 250,
  //   amt: 2290,
  //   action: "Today I didn't use as much energy as before",
  //   actiondate: '08/07/2023',
  // }



  
      // setData: (state, action) => {
      //   return action.payload
      // },