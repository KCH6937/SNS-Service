export const getTokenExpireDate = (): Date => {
  const expireTokenDate: Date = new Date();
  expireTokenDate.setDate(new Date().getDate() + Number(process.env.REFRESH_TOKEN_EXPIRES.slice(0, -1)));
  return expireTokenDate;
};
