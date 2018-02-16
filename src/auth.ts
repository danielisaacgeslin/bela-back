import { Request } from 'express';

export type res = { status: number; message: string };

export function expressAuthentication (request: Request, securityName: string, scopes?: string[]): Promise<res> {
  const jwt: string = request.query.jwt;
  const rejection: Promise<res> = Promise.reject({ status: 403, 'message': 'nop...' });
  switch(securityName) {
    case 'baseUser':
      if (jwt === 'todo') return Promise.resolve(null);
      break;
  }

  return rejection;
}
