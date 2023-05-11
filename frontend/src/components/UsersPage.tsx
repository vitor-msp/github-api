import { useEffect, useState } from "react";
import { UsersList } from "./UsersList";
import { User } from "../entities/User";
import { apiService } from "../api/ApiService";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      if (users.length > 0) return;
      const newUsers = await apiService.getUsers();
      setUsers(newUsers);
    })();
  }, [users.length]);

  return <UsersList users={users} />;
};
