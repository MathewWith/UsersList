
export interface UsersAction {
    type: string,
    payload: any
}

export enum UsersActionTypes {
    GET_USERS = 'GET_USERS'
}