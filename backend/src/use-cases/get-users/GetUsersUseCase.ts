import { IApiConsumer } from "../../infra/api/IApiConsumer";
import {
  GetUsersInputDto,
  GetUsersOutputDto,
  IGetUsersUseCase,
} from "./IGetUsersUseCase";

export class GetUsersUseCase implements IGetUsersUseCase {
  constructor(readonly apiConsumer: IApiConsumer) {}

  async execute(input: GetUsersInputDto): Promise<GetUsersOutputDto> {
    const usersPerPage = 30;
    let lastPage = input.since - usersPerPage;
    if (lastPage < 1) lastPage = 1;
    const users = await this.apiConsumer.getUsers(input.since);
    const nextPage = input.since + users.length;
    return {
      lastPage: `${input.url}?since=${lastPage}`,
      nextPage: `${input.url}?since=${nextPage}`,
      users,
    };
  }
}
