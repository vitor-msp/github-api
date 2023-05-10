import { Request, Response } from "express";
import { IGetUsersUseCase } from "../../use-cases/get-users/IGetUsersUseCase";

export interface IGetUsersController {
  readonly getUsersUseCase: IGetUsersUseCase;
  execute(req: Request, res: Response): Promise<Response>;
}
