import { User } from "../entities/User";

type UserItemProps = {
  user: User;
  selectUser: (username: string) => void;
};

export const UserItem = ({ user, selectUser }: UserItemProps) => {
  const { id, login } = user;

  const selectThisUser = () => {
    selectUser(login);
  };

  return (
    <li className="list-group-item d-flex flex-row clickable">
      <div>
        <button
          type="button"
          onClick={selectThisUser}
          className="btn btn-outline-primary"
        >
          view details
        </button>
      </div>
      <div className="mx-5">
        <span>
          id: <strong>{id}</strong>
        </span>
      </div>
      <div className="mx-5">
        <span className="my-3">
          login: <strong>{login}</strong>
        </span>
      </div>
    </li>
  );
};
