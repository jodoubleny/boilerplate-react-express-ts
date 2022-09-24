import { Request, Response } from 'express';

export const denyAccess = (req: Request, res: Response) => {
    res.sendStatus(404);
}

export const testRoute = (req: Request, res: Response) => {
    res.sendStatus(200);
}