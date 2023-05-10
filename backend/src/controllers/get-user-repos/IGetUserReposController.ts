import { Request, Response } from "express";
import { IGetUserReposUseCase } from "../../use-cases/get-user-repos/IGetUserReposUseCase";

export interface IGetUserReposController {
  readonly getUserReposUseCase: IGetUserReposUseCase;
  execute(req: Request, res: Response): Promise<Response>;
}
