import { Request, Response } from "express";
import { IGetUsersController } from "./IGetUsersController";
import { IGetUsersUseCase } from "../../use-cases/get-users/IGetUsersUseCase";
import { UserError } from "../../errors/UserError";
import { GetUsersError } from "../../errors/GetUsersError";

export class GetUsersController implements IGetUsersController {
  constructor(readonly getUsersUseCase: IGetUsersUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const input = this.validateSince(req);
      const output = await this.getUsersUseCase.execute({ since: input });
      return res.status(200).json(output);
    } catch (error: any) {
      if (error instanceof UserError || error instanceof GetUsersError)
        return res.status(400).json({ errorMessage: error.message });
      return res.status(500).json({ errorMessage: "internal error" });
    }
  }

  private validateSince(req: Request): number {
    const inputIsValid = req.body.id ? !!req.body.id.toString().trim() : false;
    if (!inputIsValid) throw new GetUsersError(`id is blank`);
    if (isNaN(req.body.id)) throw new GetUsersError(`id not is a number`);
    return req.body.id;
  }
}
