import axios from "axios";
import {getInfor} from "../slices/profileSlice";
const URL_BASE = 'http://localhost:4000/'

export const getUserById = async (id,dispatch) => {
    const response = await axios.get(URL_BASE + 'users/detail/'+`${id}`)
    dispatch(getInfor({
        user: response.data
    }))
}
export const updateUser=async (id, dispatch, values)=>{
    await axios.put(URL_BASE + 'users/'+`${id}`, values)
}
export const getPostById= async (id,dispatch)=>{

}
export const createPost=async (id,dispatch,value)=>{
    await axios.post(URL_BASE+'posts/getpost/'+`${id}`,value)
}