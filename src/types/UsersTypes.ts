
export interface UsersAction {
    type: string,
    payload: any
}

export interface UserType {
    id: 0,
    phoneNumber: "string",
    firstName: "string",
    lastName: "string",
    email: "string",
    birthDate: "string"
}

export enum UsersActionTypes {
    GET_USERS = 'GET_USERS',
    GET_USER = 'GET_USER',
    UPDATE_USER = 'UPDATE_USER',
    CREATE_USER = 'CREATE_USER',
    DELETE_USER = 'DELETE_USER',
    ADD_USER_ID = 'ADD_USER_ID',
    ERROR = 'ERROR'
}