import dotenv from "dotenv";
import { GetUsersController } from "../controllers/get-users/GetUsersController";
import { GetUsersUseCase } from "../use-cases/get-users/GetUsersUseCase";
import { ApiConsumerMock } from "../../test/mocks/ApiConsumerMock";
import { ApiConsumer } from "../infra/api/ApiConsumer";
import { GetUserDetailsController } from "../controllers/get-user-details/GetUserDetailsController";
import { GetUserDetailsUseCase } from "../use-cases/get-user-details/GetUserDetailsUseCase";

dotenv.config();

const apiConsumer =
  process.env.PRODUCTION === "true" ? new ApiConsumer() : new ApiConsumerMock();

const getUsersUseCase = new GetUsersUseCase(apiConsumer);
const getUsersController = new GetUsersController(getUsersUseCase);

const getUserDetailsUseCase = new GetUserDetailsUseCase(apiConsumer);
const getUserDetailsController = new GetUserDetailsController(
  getUserDetailsUseCase
);

export { getUsersController, getUserDetailsController };
