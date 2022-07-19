import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RequestService } from '../request.service';

//authentication middleware
@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthenticationMiddleware.name);
  constructor(private readonly requestService: RequestService) {}
  use(req: Request, res: Response, next: NextFunction) {
    // authenticate request
    const userId = '12345';
    this.requestService.setUserId(userId);
    next();
  }
}
