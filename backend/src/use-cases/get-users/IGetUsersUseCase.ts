import { IApiConsumer } from "../../infra/api/IApiConsumer";

export type GetUsersInputDto = {
  since: number;
};

export type ThinUser = {
  readonly id: number;
  readonly login: string;
};

export type GetUsersOutputDto = {
  lastPage: string;
  nextPage: string;
  users: ThinUser[];
};

export interface IGetUsersUseCase {
  readonly apiConsumer: IApiConsumer;
  execute(input: GetUsersInputDto): Promise<GetUsersOutputDto>;
}
