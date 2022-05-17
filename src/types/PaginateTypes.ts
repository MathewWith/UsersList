export interface PaginateAction {
    type: string,
    payload: any
}

export interface PageState {
    currentCountUsers: [],
    perPage: number,
}

export enum PaginateActionCreators {
    SET_CURRENT_COUNT_USERS = 'SET_CURRENT_COUNT_USERS'
}