import { Link } from "react-router-dom";
import { useActions } from "src/hooks/useActions";
import { UserType } from "src/types/UsersTypes";

export const UsersListItem = ({ user }: { user: UserType }) => {

  const { deleteUser } = useActions();
  return (
    <div className="users-item">
      <div className="users-item__label">User</div>
      <div className="user-info">
        <div className="user-info__left-side">
          {`${user.firstName} ${user.lastName} `}
          <br />
          {user.birthDate}
        </div>
        <div className="user-info__right-side">
          {user.email}
          <br />
          {user.phoneNumber}
        </div>
      </div>
      <div className="buttons">
        <button
          className="buttons__delete-user"
          onClick={() => deleteUser(user.id)}
        >
          Delete user
        </button>
        <Link className="buttons__update-user" to={`users/${user.id}/update`}>Update user</Link>
      </div>
    </div>
  );
};
