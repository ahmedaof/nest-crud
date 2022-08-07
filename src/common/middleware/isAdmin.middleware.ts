import { UserTokensService } from 'src/user-tokens/user-tokens.service';
import { UserToken } from 'src/user-tokens/entities/user-token.entity';
import { Injectable, NestMiddleware, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NextFunction, Request, Response } from "express";
import { Repository } from 'typeorm';

@Injectable()

export class isAdmin implements NestMiddleware{
    constructor(private userToken: UserTokensService) { }
   async use(req:Request, res:Response,next:NextFunction) {
        
        let isAdmin = await this.userToken.checkIsAdmin(req.headers.auth_token)
        
      if(!isAdmin) return res.status(400).send('u dont have this permission')

       next()
    }
}