import {combineReducers} from 'redux'
import { paginate } from './paginate'
import { users } from './users'

export const reducer = combineReducers({
    users,
    paginate
}) 

export type RootType = ReturnType<typeof reducer>