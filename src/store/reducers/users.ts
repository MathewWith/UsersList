import { UsersAction, UsersActionTypes } from "src/types/UsersTypes";

const initialState = {
  users: [],
  loading: false,
  error: false
};

export const users = (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case UsersActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UsersActionTypes.DELETE_USER:
        return {
            ...state,
            users: [...state.users.filter((item: any) => item.id !== action.payload)]
        }
    case UsersActionTypes.GET_USER:
        return {
            ...state,
            currentUser: action.payload
        }
    case UsersActionTypes.ERROR:
        return {
            ...state,
            error: action.payload
        }
    default:
      return state;
  }
};
