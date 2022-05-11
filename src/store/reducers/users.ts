import { UsersAction, UsersActionTypes } from "src/types/UsersTypes"

const initialState = {
    users: [],
    currentPage: 1,
    perPage: 5,
    totalCount: 0
}

export const users = (state = initialState, action: UsersAction) => {
    switch(action.type){
        case UsersActionTypes.GET_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        default:
            return state
    }
}