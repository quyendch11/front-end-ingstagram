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
            state.user=action.payload.user
        },
        editUser:(state,action)=>{
             state.user = action.payload.user
        }
    }
})
export const {
    getInfor,
    updateUser
} = profileSlice.actions
export default profileSlice.reducer