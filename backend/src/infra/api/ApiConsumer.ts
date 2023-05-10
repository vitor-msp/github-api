import dotenv from "dotenv";
import { Octokit } from "octokit";
import { ThinUser } from "../../use-cases/get-users/IGetUsersUseCase";
import { GetUserReposApiInput, IApiConsumer } from "./IApiConsumer";
import { UserProps } from "../../domain/users/IUser";
import { RepositoryProps } from "../../domain/repositories/IRepository";

export class ApiConsumer implements IApiConsumer {
  private readonly octokit: Octokit;

  constructor() {
    dotenv.config();
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) throw new Error("missing GitHub token");
    this.octokit = new Octokit({ auth: githubToken });
  }

  async getUsers(since: number): Promise<ThinUser[]> {
    const users = await this.octokit.request(`GET /users`, {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      since,
    });
    return users.data.map(({ id, login }) => {
      return {
        id,
        login,
      };
    });
  }

  async getUserDetails(username: string): Promise<UserProps> {
    const user = await this.octokit.request(`GET /users/{username}`, {
      username,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const { id, login, html_url, avatar_url, created_at } = user.data;
    return {
      id,
      login,
      url: html_url,
      avatarUrl: avatar_url,
      createdAt: created_at,
    };
  }

  async getUserRepos(
    getUserReposApiInput: GetUserReposApiInput
  ): Promise<RepositoryProps[]> {
    const { username, pageNumber, perPage } = getUserReposApiInput;
    const repositories = await this.octokit.request(
      "GET /users/{username}/repos",
      {
        username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
        page: pageNumber,
        per_page: perPage,
      }
    );
    return repositories.data.map(({ id, name, url }) => {
      return {
        id,
        name,
        url,
      };
    });
  }
}
