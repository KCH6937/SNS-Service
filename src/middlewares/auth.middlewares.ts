import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/jwt.util';
import { errResponse } from '../utils/response.util';
import statusCode from '../utils/statusCode.util';
import message from '../utils/responseMessage.util';

const authJWT = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers['authorization']!.split(' ').reverse()[0];
  console.log('token: ', token);

  if (!token) {
    return res.status(statusCode.UNAUTHORIZED).send(errResponse(statusCode.UNAUTHORIZED, message.NULL_VALUE_ACEESS_TOKEN));
  }

  const result = verifyAccessToken(token);

  if (result.ok) {
    req.body.userId = result.userId;
    next();
  } else {
    // 토큰 만료
    if (result.message.includes('expired')) {
      return res.status(statusCode.UNAUTHORIZED).send(errResponse(statusCode.UNAUTHORIZED, message.ACCESS_TOKEN_EXPIRES));
    }
    // 검증 실패
    return res.status(statusCode.UNAUTHORIZED).send(errResponse(statusCode.UNAUTHORIZED, message.INVALID_ACCESS_TOKEN));
  }
};

export default authJWT;
