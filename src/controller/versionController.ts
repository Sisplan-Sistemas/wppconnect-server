import { Request, Response } from 'express';

export async function returnVersion(req: Request, res: Response) {
  return res.status(201).json({ response: '2.2.4' });
}
