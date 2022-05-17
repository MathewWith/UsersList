import * as UsersActionCreators from './users';
import * as PaginateActionCreators from './paginate'

export default {
    ...UsersActionCreators,
    ...PaginateActionCreators
}