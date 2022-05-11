import { useEffect } from "react"
import { useActions } from "src/hooks/useActions"
import { useTypedSelector } from "src/hooks/useTypedSelector"
import UsersListItem from "../UsersListItem"

interface StateTypes {
    users: any
}

export const UsersList = () => {
    const data= useTypedSelector((state: StateTypes) => state.users)
    const {getUsers} = useActions()
    useEffect(() => {
        const getUsersData = async () => {
            await getUsers()
        }

        getUsersData()
    }, [])
    
    return (
        <div className="users-list">
            {data.users.map((user: any) => <UsersListItem key={user.id} user={user}/>)}
        </div>
    )
}