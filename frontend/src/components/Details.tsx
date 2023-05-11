import { useEffect, useState } from "react";
import { UserDetails } from "../entities/UserDetails";
import { apiService } from "../api/ApiService";

type DetailsProps = {
  username: string;
};

export const Details = ({ username }: DetailsProps) => {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    (async () => {
      if (user !== null) return;
      const newUser = await apiService.getUserDetails(username);
      setUser(newUser);
    })();
  }, [user, username]);

  return (
    <>
      <div>
        {user?.avatarUrl && <img src={user.avatarUrl} alt={user.login} />}
      </div>
      <div>
        <span>id: {user?.id}</span>
        <span>login: {user?.login}</span>
        <span>createdAt: {user?.createdAt}</span>
        {user?.url && (
          <a href={user.url} target="_blank" rel="noreferrer">
            view profile
          </a>
        )}
      </div>
    </>
  );
};
