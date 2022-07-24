import jwt from 'jsonwebtoken';
import './env.util';

const jwtSecret = process.env.JWT_SECRET;

//access token 발급
export const signAccessToken = (userId: number) => {
  const payload = {
    userId,
  };

  return jwt.sign(payload, jwtSecret, {
    algorithm: 'HS256',
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
  });
};

//refresh token 발급
export const signRefreshToken = () => {
  return jwt.sign({}, jwtSecret, {
    algorithm: 'HS256',
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES,
  });
};

//access token 검증
export const verifyAccessToken = (token: string) => {
  let decoded = null;
  try {
    decoded = jwt.verify(token, jwtSecret);

    return {
      ok: true,
      userId: decoded.userId,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.message,
    };
  }
};
