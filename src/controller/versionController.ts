import { Request, Response } from 'express';

export async function returnVersion(req: Request, res: Response) {
  return res.status(200).json({ versao: '2.2.4-2' });
}
