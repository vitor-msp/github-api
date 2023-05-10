import { IApiConsumer } from "../../infra/api/IApiConsumer";
import { URL_GET_USERS } from "../../main/routes";
import {
  GetUsersInputDto,
  GetUsersOutputDto,
  IGetUsersUseCase,
} from "./IGetUsersUseCase";

export class GetUsersUseCase implements IGetUsersUseCase {
  constructor(readonly apiConsumer: IApiConsumer) {}

  async execute(input: GetUsersInputDto): Promise<GetUsersOutputDto> {
    const usersPerPage = 30;
    const lastPage = input.since - usersPerPage;
    const nextPage = input.since + usersPerPage;
    const users = await this.apiConsumer.getUsers(input.since);
    return {
      lastPage: `${URL_GET_USERS}?since=${lastPage}`,
      nextPage: `${URL_GET_USERS}?since=${nextPage}`,
      users,
    };
  }
}
