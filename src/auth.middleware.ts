import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { PrismaService } from './prisma.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    const authHeader = req.headers.authorization;
    const user = this.prisma.user.findUnique({
      where: {
        id: authHeader,
      },
    });
    if (user === null) {
      throw new UnauthorizedException();
    }
    next();
  }
}
