import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    user: {
        username: 'quyen',
        email: 'quyen@gmail.com',
        dob:'22/1/1999',
        avatar:'ohaha',
        name:'quyen'
    },
    posts:[],
    post:{
        text:'',
        image:'',
        video:'',
        userId:''
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
        },
        getPostsById:(state,action)=>{
            state.posts=action.payload.posts
        },
        createPost:(state,action)=>{
            state.posts.push(action.payload.post)
        }
    }
})
export const {
    getInfor,
    editUser,
    getPostsById,
    createPost
} = profileSlice.actions
export default profileSlice.reducer