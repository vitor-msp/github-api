import { Request, Response } from "express";
import { IGetUserDetailsUseCase } from "../../use-cases/get-user-details/IGetUserDetailsUseCase";

export interface IGetUserDetailsController {
  readonly getUserDetailsUseCase: IGetUserDetailsUseCase;
  execute(req: Request, res: Response): Promise<Response>;
}
