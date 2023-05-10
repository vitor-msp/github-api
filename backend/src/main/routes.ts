import { Router, Request, Response } from "express";

const router = Router();

export const URL_GET_USERS = "/api/users";

router.get(URL_GET_USERS, (req: Request, res: Response) => {});

export { router as routes };
