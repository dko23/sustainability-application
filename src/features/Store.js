import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice"
import storage from 'redux-persist/lib/storage';//it is an object represents the storage medium where the state will be persisted. In this case, it uses the browser's local storage.
import { persistReducer, persistStore } from 'redux-persist'; 
import { combineReducers } from 'redux';//combineReducers function to group up all the reducers into one so that we can pass it to the redux-persist.


// const persistConfig = {
//     key: 'post',
//     storage,
// };//create the persist object config that will be stored to the storage:defines the configuration for persisting the state

// const reducers = combineReducers({ post: postReducer });///combines multiple reducers into a single reducer. 

// const persistedReducer = persistReducer(persistConfig, reducers);//persistConfig and the combined reducers and returns a new reducer that has persistence capabilities. 


// export default configureStore({
//     reducer: persistedReducer
// })//// enable the APIprrovider get access to the API to share in the whole app

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice"
export default configureStore({
    reducer: {
        post: postReducer
    }
})// Original