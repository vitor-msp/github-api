import { Request, Response } from "express";
import { IGetUserDetailsController } from "./IGetUserDetailsController";
import { IGetUserDetailsUseCase } from "../../use-cases/get-user-details/IGetUserDetailsUseCase";

export class GetUserDetailsController implements IGetUserDetailsController {
  constructor(readonly getUserDetailsUseCase: IGetUserDetailsUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const username = req.params.username;
      const output = await this.getUserDetailsUseCase.execute({ username });
      return res.status(200).json(output);
    } catch (error: any) {
      return res.status(500).json({ errorMessage: "internal error" });
    }
  }
}
