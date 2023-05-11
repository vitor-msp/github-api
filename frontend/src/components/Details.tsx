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
      <div className="d-flex flex-column">
        <span>
          id: <strong>{user?.id}</strong>
        </span>
        <span>
          login: <strong>{user?.login}</strong>
        </span>
        {user?.createdAt && (
          <span>
            created at:{" "}
            <strong>{new Date(user.createdAt).toUTCString()}</strong>
          </span>
        )}
        {user?.url && (
          <a href={user.url} target="_blank" rel="noreferrer">
            view profile
          </a>
        )}
      </div>
      <div>
        {user?.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.login}
            width={300}
            height={"auto"}
            className="rounded"
          />
        )}
      </div>
    </>
  );
};
