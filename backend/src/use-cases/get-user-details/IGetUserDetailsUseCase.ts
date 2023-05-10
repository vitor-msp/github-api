import { UserProps } from "../../domain/users/IUser";
import { IApiConsumer } from "../../infra/api/IApiConsumer";

export type GetUserDetailsInputDto = {
  username: string;
};

export type GetUserDetailsOutputDto = {
  user: UserProps;
};

export interface IGetUserDetailsUseCase {
  readonly apiConsumer: IApiConsumer;
  execute(input: GetUserDetailsInputDto): Promise<GetUserDetailsOutputDto>;
}
