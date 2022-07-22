export interface CustomResponse {
  (status: number, message: string, data?: object): object;
}
