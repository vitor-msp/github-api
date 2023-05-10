import dotenv from "dotenv";
import { Octokit } from "octokit";
import { ThinUser } from "../../use-cases/get-users/IGetUsersUseCase";
import { IApiConsumer } from "./IApiConsumer";

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
}
