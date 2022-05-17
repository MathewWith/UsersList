import { useState } from "react"
import { useTypedSelector } from "src/hooks/useTypedSelector"
import { PageState } from "src/types/PaginateTypes"
import { UserType } from "src/types/UsersTypes"
import Paginate from "../Paginate"
import UsersListItem from "../UsersListItem"

export const UsersList = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const pageData: PageState = useTypedSelector((state) => state.paginate);
    const usersData = useTypedSelector((state) => state.users);
    
    const lastPage = currentPage * pageData.perPage;
    const firstPage = lastPage - pageData.perPage;
    const currentCount = usersData.users.slice(firstPage, lastPage);
    
    return (
        <div className="users-list">
            <div className="users-list__content">
                {currentCount.map((user: UserType) => <UsersListItem key={user.id} user={user}/>)}
            </div>
            <div className="users-list__paginate">
                <Paginate setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </div>
    )
} 