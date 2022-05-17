import { PageState, PaginateAction, PaginateActionCreators } from "src/types/PaginateTypes";

const initialState: PageState = {
    currentCountUsers: [],
    perPage: 10,
}

export const paginate = (state = initialState , action: PaginateAction) => {
    switch(action.payload){
        case PaginateActionCreators.SET_CURRENT_COUNT_USERS: 
            return {
                ...state,
                currentCountUsers: action.payload
            }
        default:
            return state
    }
}