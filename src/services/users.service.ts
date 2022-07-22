import message from '../utils/responseMessage.util';
import statusCode from '../utils/statusCode.util';
import { response, errResponse } from '../utils/response.util';
// import User from '../models/users.model';

const signUp = async () => {
  try {
    // const user = await User.create();

    return [statusCode.OK, response(statusCode.OK, message.SUCCESS)];
  } catch (err) {
    return [statusCode.INTERNAL_SERVER_ERROR, errResponse(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR)];
  }
};

export default {
  signUp,
};
