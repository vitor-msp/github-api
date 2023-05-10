import { RepositoryProps } from "../../domain/repositories/IRepository";
import { IApiConsumer } from "../../infra/api/IApiConsumer";

export type GetUserReposInputDto = {
  username: string;
  pageNumber?: number;
};

export type GetUserReposOutputDto = {
  username: string;
  repos: RepositoryProps[];
};

export interface IGetUserReposUseCase {
  readonly apiConsumer: IApiConsumer;
  execute(input: GetUserReposInputDto): Promise<GetUserReposOutputDto>;
}
