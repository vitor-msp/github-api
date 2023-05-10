import { RepositoryProps } from "../../domain/repositories/IRepository";
import { UserProps } from "../../domain/users/IUser";
import { ThinUser } from "../../use-cases/get-users/IGetUsersUseCase";

export type GetUserReposApiInput = {
  username: string;
  perPage: number;
  pageNumber: number;
};

export interface IApiConsumer {
  getUsers(since: number): Promise<ThinUser[]>;
  getUserDetails(username: string): Promise<UserProps>;
  getUserRepos(
    getUserReposApiInput: GetUserReposApiInput
  ): Promise<RepositoryProps[]>;
}
