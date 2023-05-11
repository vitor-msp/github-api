import { useEffect, useState } from "react";
import { apiService } from "../api/ApiService";
import { Repository } from "../entities/Repository";

type ReposProps = {
  username: string;
};

export const Repos = ({ username }: ReposProps) => {
  const [repositories, setRepositories] = useState<Repository[] | null>(null);

  useEffect(() => {
    (async () => {
      if (repositories !== null) return;
      const newRepositories = await apiService.getUserRepos(username);
      setRepositories(newRepositories);
    })();
  }, [repositories, username]);

  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>url</th>
        </tr>
        {repositories?.map(({ id, name, url }) => {
          return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <a href={url} target="_blank" rel="noreferrer">
                  view repo
                </a>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
