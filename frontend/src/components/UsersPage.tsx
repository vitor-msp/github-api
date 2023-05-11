import { useEffect, useState } from "react";
import { UsersList } from "./UsersList";
import { User } from "../entities/User";
import { apiService } from "../api/ApiService";
import { GetUsersResponse } from "../api/IApiService";

type UsersPageProps = {
  selectUser: (username: string) => void;
};

export const UsersPage = ({ selectUser }: UsersPageProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [lastPage, setLastPage] = useState<string>("");
  const [nextPage, setNextPage] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (users.length > 0) return;
      const res = await apiService.getUsers();
      setNewUsers(res);
    })();
  }, [users.length]);

  const setNewUsers = (res: GetUsersResponse | null) => {
    if (!res) {
      alert("Error to get users.");
      return;
    }
    setUsers(res.users);
    setLastPage(res.lastPage);
    setNextPage(res.nextPage);
  };

  const getNextPage = async () => {
    const res = await apiService.getUsers(nextPage);
    setNewUsers(res);
  };

  const getLastPage = async () => {
    const res = await apiService.getUsers(lastPage);
    setNewUsers(res);
  };

  return (
    <>
      <UsersList users={users} selectUser={selectUser} />
      <div>
        <button type="button" onClick={getLastPage}>{`<<`}</button>
        <button type="button" onClick={getNextPage}>{`>>`}</button>
      </div>
    </>
  );
};
