import { IApiConsumer } from "../../infra/api/IApiConsumer";
import {
  GetUserReposInputDto,
  GetUserReposOutputDto,
  IGetUserReposUseCase,
} from "./IGetUserReposUseCase";

export class GetUserReposUseCase implements IGetUserReposUseCase {
  constructor(readonly apiConsumer: IApiConsumer) {}

  async execute(input: GetUserReposInputDto): Promise<GetUserReposOutputDto> {
    const pageNumber = input.pageNumber ?? 0;
    const perPage = 100;
    const repositories = await this.apiConsumer.getUserRepos({
      username: input.username,
      pageNumber,
      perPage,
    });
    return {
      username: input.username,
      repos: repositories,
    };
  }
}
