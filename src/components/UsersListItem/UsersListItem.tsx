
export const UsersListItem = ({user}: {user: any}) => {
    return (
        <div className="users-item">
            <div className="user-info">
                <div className="user-info__left-side">
                   {`${user.firstName} ${user.lastName} `}
                   <br />
                   {user.birthDate}
                </div>
                <div className="user-info__right-side">
                    {user.email}
                    <br/>
                    {user.phone}
                </div>
            </div>
            <div className="buttons">
                <button className="buttons__delete-user">Delete user</button>
                <button className="buttons__update-user">Update user</button>
            </div>
        </div>
    )
}