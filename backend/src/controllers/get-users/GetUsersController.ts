import { Request, Response } from "express";
import dotenv from "dotenv";
import { IGetUsersController } from "./IGetUsersController";
import { IGetUsersUseCase } from "../../use-cases/get-users/IGetUsersUseCase";
import { UserError } from "../../errors/UserError";

export class GetUsersController implements IGetUsersController {
  constructor(readonly getUsersUseCase: IGetUsersUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const since = this.validateSince(req);
      const url = this.getLocalUrl(req);
      const output = await this.getUsersUseCase.execute({ since, url });
      return res.status(200).json(output);
    } catch (error: any) {
      return res.status(500).json({ errorMessage: "internal error" });
    }
  }

  private validateSince(req: Request): null | number {
    if (!req.query.since) return null;
    const sinceNumber = +req.query.since;
    if (isNaN(sinceNumber)) return null;
    return sinceNumber;
  }

  private getLocalUrl(req: Request): string {
    dotenv.config();
    const protocol = req.protocol;
    const host = req.hostname;
    const path = req.path;
    const port = process.env.SERVER_PORT;
    const fullUrl = `${protocol}://${host}:${port}${path}`;
    return fullUrl;
  }
}
