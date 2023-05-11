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
    <div className="my-3">
      <h5>Public Repositories</h5>
      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};
