import message from '../utils/responseMessage.util';
import statusCode from '../utils/statusCode.util';
import { response, errResponse } from '../utils/response.util';
import { User } from '../entities/users.entity';
import { TokenStorage } from '../entities/tokenStorage.entity';
import { signAccessToken, signRefreshToken } from '../utils/jwt.util';
import { getTokenExpireDate } from '../modules/token.modules';

const signUp = async (email: string, password: string) => {
  // Validation
  if (!(email && password)) {
    return [statusCode.BAD_REQUEST, errResponse(statusCode.BAD_REQUEST, message.BAD_REQUEST)];
  }

  try {
    const user: User = await User.findOne({ email });
    if (user) {
      return [statusCode.BAD_REQUEST, errResponse(statusCode.BAD_REQUEST, message.ALREADY_EXIST_EMAIL)];
    } else {
      // 회원가입
      const user: User = new User();
      user.email = email;
      user.password = password;
      await user.save();

      // 회원가입한 유저에 대한 Refresh Token 생성
      const refreshToken: string = signRefreshToken();
      const tokenStorage = new TokenStorage();
      tokenStorage.user = user;
      tokenStorage.refreshToken = refreshToken;
      tokenStorage.expiredAt = getTokenExpireDate() as Date;
      await tokenStorage.save();

      return [statusCode.OK, response(statusCode.OK, message.SUCCESS)];
    }
  } catch (err) {
    console.log(err);
    return [statusCode.INTERNAL_SERVER_ERROR, errResponse(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR)];
  }
};

const signIn = async (email: string, password: string) => {
  // Validation
  if (!(email && password)) {
    return [statusCode.BAD_REQUEST, errResponse(statusCode.BAD_REQUEST, message.BAD_REQUEST)];
  }

  try {
    const user: User = await User.findOne({ email, password });
    if (user) {
      const accessToken: string = signAccessToken(user.id);

      return [statusCode.OK, response(statusCode.OK, message.SUCCESS, { accessToken })];
    } else {
      return [statusCode.BAD_REQUEST, errResponse(statusCode.BAD_REQUEST, message.INVALID_USER_INFO)];
    }
  } catch (err) {
    return [statusCode.INTERNAL_SERVER_ERROR, errResponse(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR)];
  }
};

const withdraw = async (userId: number) => {
  // Validation
  try {
    const user: User = await User.findOne({ id: userId });
    if (user) {
      await User.softRemove(user);
      return [statusCode.OK, response(statusCode.OK, message.SUCCESS)];
    } else {
      return [statusCode.BAD_REQUEST, errResponse(statusCode.BAD_REQUEST, message.INVALID_USER_INFO)];
    }
  } catch (err) {
    console.log(err);
    return [statusCode.INTERNAL_SERVER_ERROR, errResponse(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR)];
  }
};

export default {
  signUp,
  signIn,
  withdraw,
};
