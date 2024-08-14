import { store } from '.';
import { AuthorizationStatus, RequestStatus } from '../const';
import { User } from '../types/user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserState = {
  info: null | User;
  status: AuthorizationStatus;
  requestStatus: RequestStatus;
};
