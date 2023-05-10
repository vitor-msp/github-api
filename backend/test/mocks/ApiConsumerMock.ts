import { IApiConsumer } from "../../src/infra/api/IApiConsumer";
import { ThinUser } from "../../src/use-cases/get-users/IGetUsersUseCase";

export class ApiConsumerMock implements IApiConsumer {
  constructor() {}

  async getUsers(since: number): Promise<ThinUser[]> {
    return [];
  }
}
