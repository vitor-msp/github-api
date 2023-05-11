import { User } from "../entities/User";

export type UserItemProps = {
  user: User;
};

export const UserItem = ({ user }: UserItemProps) => {
  const { id, login } = user;
  return (
    <li>
      <span>id: {id}</span>
      <span>login: {login}</span>
    </li>
  );
};
