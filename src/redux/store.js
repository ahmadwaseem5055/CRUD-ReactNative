import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from './UserSlice';



const store = configureStore({
    reducer :{
        user: userDataReducer

    }
})
export default store;