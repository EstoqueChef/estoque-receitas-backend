import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'sua_chave_secreta',
    });
  }

  async validate(payload: any) {
    return { sub: payload.sub, email: payload.email };
  }
}

export interface RequestWithUser extends Request {
  user: {
    sub: string;
    email: string;
  };
}