import { IApiConsumer } from "../../infra/api/IApiConsumer";
import {
  GetUserDetailsInputDto,
  GetUserDetailsOutputDto,
  IGetUserDetailsUseCase,
} from "./IGetUserDetailsUseCase";

export class GetUserDetailsUseCase implements IGetUserDetailsUseCase {
  constructor(readonly apiConsumer: IApiConsumer) {}

  async execute(
    input: GetUserDetailsInputDto
  ): Promise<GetUserDetailsOutputDto> {
    const user = await this.apiConsumer.getUserDetails(input.username);
    return {
      user,
    };
  }
}
