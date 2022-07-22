import { CustomResponse } from '../interfaces/response.interface';

const response: CustomResponse = (status, message, data) => {
  return {
    status,
    success: true,
    message,
    data,
  };
};

const errResponse: CustomResponse = (status, message, data) => {
  return {
    status,
    success: false,
    message,
    data,
  };
};

export { response, errResponse };
