import axios from "axios"
import { UsersActionTypes } from "src/types/UsersTypes"

export const getUsers = () => {
    return async (dispatch: any) => {
        const response = await axios.get(`https://dummyjson.com/users`)
        dispatch({
            type: UsersActionTypes.GET_USERS,
            payload: response.data
        })
    }
}
