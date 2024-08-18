import { StatusCodes } from 'http-status-codes';

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

export enum ApiDefault {
  ServerUrl = 'https://16.design.htmlacademy.pro/six-cities',
  RequestTimeout = 5000,
}
