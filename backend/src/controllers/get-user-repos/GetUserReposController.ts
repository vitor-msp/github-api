import { Request, Response } from "express";
import { IGetUserReposController } from "./IGetUserReposController";
import { IGetUserReposUseCase } from "../../use-cases/get-user-repos/IGetUserReposUseCase";

export class GetUserReposController implements IGetUserReposController {
  constructor(readonly getUserReposUseCase: IGetUserReposUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const username = req.params.username;
      const pageNumber = this.validatePageNumber(req);
      const output = await this.getUserReposUseCase.execute({
        username,
        pageNumber,
      });
      return res.status(200).json(output);
    } catch (error: any) {
      return res.status(500).json({ errorMessage: "internal error" });
    }
  }

  private validatePageNumber(req: Request): undefined | number {
    console.log(req.query.pagenumber);
    if (!req.query.pagenumber) return undefined;
    const pageNumber = +req.query.pagenumber;
    if (isNaN(pageNumber)) return undefined;
    return pageNumber;
  }
}
