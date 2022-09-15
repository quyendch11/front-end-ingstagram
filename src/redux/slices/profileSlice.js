import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {
        username: 'quyen',
        email: 'quyen@gmail.com',
        dob:'22/1/1999',
        avatar:'ohaha',
        name:'quyen'
    }
}
const profileSlice= createSlice({
    name:'profile',
    initialState,
    reducers:{
        getInfor:(state,action)=>{
            console.log(action.payload)
            state.user=action.payload.user
        }
    }
})
export const {
    getInfor
} = profileSlice.actions
export default profileSlice.reducer