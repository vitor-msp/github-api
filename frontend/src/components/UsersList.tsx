import { User } from "../entities/User";
import { UserItem } from "./UserItem";

export type UsersListProps = {
  users: User[];
};

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <ul>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  );
};
