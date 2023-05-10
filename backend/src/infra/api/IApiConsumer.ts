import { ThinUser } from "../../use-cases/get-users/IGetUsersUseCase";

export interface IApiConsumer {
  getUsers(since: number): Promise<ThinUser[]>;
}
