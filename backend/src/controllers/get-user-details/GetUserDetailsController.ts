import { Request, Response } from "express";
import { IGetUserDetailsController } from "./IGetUserDetailsController";
import { IGetUserDetailsUseCase } from "../../use-cases/get-user-details/IGetUserDetailsUseCase";
import { UserDetailsError } from "../../errors/UserDetailsError";

export class GetUserDetailsController implements IGetUserDetailsController {
  constructor(readonly getUserDetailsUseCase: IGetUserDetailsUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const username = this.validateUsername(req);
      const output = await this.getUserDetailsUseCase.execute({ username });
      return res.status(200).json(output);
    } catch (error: any) {
      if (error instanceof UserDetailsError)
        return res.status(400).json({ errorMessage: error.message });
      return res.status(500).json({ errorMessage: "internal error" });
    }
  }

  private validateUsername(req: Request): string {
    const inputIsValid = !!req.params.username ?? false;
    if (!inputIsValid) throw new UserDetailsError("missing username");
    return req.params.username;
  }
}
