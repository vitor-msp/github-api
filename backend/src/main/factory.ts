import dotenv from "dotenv";
import { GetUsersController } from "../controllers/get-users/GetUsersController";
import { GetUsersUseCase } from "../use-cases/get-users/GetUsersUseCase";
import { ApiConsumerMock } from "../../test/mocks/ApiConsumerMock";
import { ApiConsumer } from "../infra/api/ApiConsumer";

dotenv.config();

const apiConsumer =
  process.env.PRODUCTION === "true" ? new ApiConsumer() : new ApiConsumerMock();
const getUsersUseCase = new GetUsersUseCase(apiConsumer);
const getUsersController = new GetUsersController(getUsersUseCase);

export { getUsersController };
