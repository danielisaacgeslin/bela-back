import { Request } from 'express';

import { ApiError } from './config/ErrorHandler';

export type res = { status: number; message: string };

export async function expressAuthentication(request: Request, securityName: string, scopes?: string[]): Promise<res> {
  const jwt: string = <string>request.headers.authorization;
  switch (securityName) {
    case 'baseUser':
      if (jwt === 'todo') return null;
      break;
  }
  throw new ApiError('auth', 403, 'invalid credentials');
}
