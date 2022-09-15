import axios from "axios";
import {getInfor} from "../slices/profileSlice";
const URL_BASE = 'http://localhost:4000/'

export const getUserById = async (id,dispatch) => {
    const response = await axios.get(URL_BASE + 'users/detail/'+`${id}`)
    dispatch(getInfor({
        user: response.data
    }))
}