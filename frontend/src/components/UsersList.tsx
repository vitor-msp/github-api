import { User } from "../entities/User";
import { UserItem } from "./UserItem";

type UsersListProps = {
  users: User[];
  selectUser: (username: string) => void;
};

export const UsersList = ({ users, selectUser }: UsersListProps) => {
  return (
    <ul className="list-group">
      {users.map((user) => {
        return <UserItem key={user.id} user={user} selectUser={selectUser} />;
      })}
    </ul>
  );
};
