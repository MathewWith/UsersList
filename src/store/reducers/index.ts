import {combineReducers} from 'redux'
import { users } from './users'

export const reducer = combineReducers({
    users
}) 

export type RootType = ReturnType<typeof reducer>