import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { UsersActionTypes } from "src/types/UsersTypes";

export const getUsers = () => {
  return async (dispatch: (arg0: { type: UsersActionTypes; payload: any; }) => void) => {
    try {
      const response = await axios.get(`http://localhost:8000/users`);
      dispatch({
        type: UsersActionTypes.GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.ERROR,
        payload: error
      })
    }
  };
};

export const getUser = (id: string) => {
  return async (dispatch: (arg0: { type: UsersActionTypes; payload: any; }) => void) => {
    try {
      const response = await axios.get(`http://localhost:8000/users/${id}`);
      dispatch({
        type: UsersActionTypes.GET_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.ERROR,
        payload: error
      })
    }
  };
};

export const createUser = (
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  birthDate: string
) => {
  return async (dispatch: (arg0: { type: UsersActionTypes; payload: any; }) => void) => {
    try {
      const response = await axios.post(`http://localhost:8000/users`, {
        firstName,
        lastName,
        phoneNumber,
        email,
        birthDate,
      });
      dispatch({
        type: UsersActionTypes.CREATE_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.ERROR,
        payload: error
      })
    }
  };
};

export const updateUser = (
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  birthDate: string,
  id: string
) => {
  return async (dispatch: (arg0: { type: UsersActionTypes; payload: any; }) => void) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/${id}`, {
        firstName,
        lastName,
        phoneNumber,
        email,
        birthDate,
      });
      dispatch({
        type: UsersActionTypes.UPDATE_USER,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.ERROR,
        payload: error
      })
    }
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: (arg0: { type: UsersActionTypes; payload: any; }) => void) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      dispatch({
        type: UsersActionTypes.DELETE_USER,
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: UsersActionTypes.ERROR,
        payload: e
      })
    }
  };
};

// export const setError = (error: string) => {
//   return {
//     type: UsersActionTypes.ERROR,
//     payload: error,
//   };
// };
