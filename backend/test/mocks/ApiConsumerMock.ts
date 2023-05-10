import { UserProps } from "../../src/domain/users/IUser";
import { IApiConsumer } from "../../src/infra/api/IApiConsumer";
import { ThinUser } from "../../src/use-cases/get-users/IGetUsersUseCase";

export const GET_USERS_OUTPUT_MOCK = [
  {
    id: 1,
    login: "login1",
    url: "https://www.github.com",
  },
  {
    id: 2,
    login: "login2",
    url: "https://www.github.com",
  },
];

export const GET_USER_DETAILS_OUTPUT_MOCK = {
  id: 1,
  login: "login1",
  url: "https://www.github.com",
  avatarUrl: "https://www.github.com",
  createdAt: new Date().toISOString(),
};

export class ApiConsumerMock implements IApiConsumer {
  constructor() {}

  async getUsers(since: number): Promise<ThinUser[]> {
    return GET_USERS_OUTPUT_MOCK;
  }

  async getUserDetails(username: string): Promise<UserProps> {
    return GET_USER_DETAILS_OUTPUT_MOCK;
  }
}
