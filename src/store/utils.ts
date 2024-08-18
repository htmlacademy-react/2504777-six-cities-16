import { PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus, AuthorizationStatus } from '../const';
import { User } from '../types/user';
import { UserState } from './types';

export const loadingUpdate = (state: UserState) => {
  state.requestStatus = RequestStatus.Loading;
};

export const successUpdate = (state: UserState, action: PayloadAction<User>) => {
  state.requestStatus = RequestStatus.Success;
  state.info = action.payload;
  state.status = AuthorizationStatus.Auth;
};

export const failedUpdate = (state: UserState) => {
  state.requestStatus = RequestStatus.Failed;
  state.status = AuthorizationStatus.NoAuth;
};
