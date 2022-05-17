import { PaginateActionCreators } from "src/types/PaginateTypes";

export const setCurrentCountUsers = (arr: any) => {
        return {
        type: PaginateActionCreators.SET_CURRENT_COUNT_USERS,
        payload: arr
    }
}

