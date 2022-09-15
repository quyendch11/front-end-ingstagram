import {configureStore} from "@reduxjs/toolkit";
import profileReducer from './slices/profileSlice'
const store =configureStore({
    reducer:{
        user:profileReducer
    }
})
export default store