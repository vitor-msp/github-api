import { User } from "../entities/User";

export type UserItemProps = {
  user: User;
  selectUser: (username: string) => void;
};

export const UserItem = ({ user, selectUser }: UserItemProps) => {
  const { id, login } = user;

  const selectThisUser = () => {
    selectUser(login);
  };

  return (
    <li onClick={selectThisUser}>
      <span>id: {id}</span>
      <span>login: {login}</span>
    </li>
  );
};
