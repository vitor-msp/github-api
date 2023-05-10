import { Router, Request, Response } from "express";
import {
  getUserDetailsController,
  getUserReposController,
  getUsersController,
} from "./factory";

export const URL_GET_USERS = "/api/users";

export abstract class Routes {
  static getRoutes(): Router {
    const router = Router();
    router.get(URL_GET_USERS, (req: Request, res: Response) => {
      return getUsersController.execute(req, res);
    });
    router.get(
      "/api/users/:username/details",
      (req: Request, res: Response) => {
        return getUserDetailsController.execute(req, res);
      }
    );
    router.get("/api/users/:username/repos", (req: Request, res: Response) => {
      return getUserReposController.execute(req, res);
    });
    return router;
  }
}
