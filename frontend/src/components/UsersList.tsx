import { User } from "../entities/User";
import { UserItem } from "./UserItem";

export type UsersListProps = {
  users: User[];
  selectUser: (username: string) => void;
};

export const UsersList = ({ users, selectUser }: UsersListProps) => {
  return (
    <ul>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} selectUser={selectUser} />;
      })}
    </ul>
  );
};
