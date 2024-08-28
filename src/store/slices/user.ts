import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../types';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { SliceName } from '../const';
import { loadingUpdate, successUpdate, failedUpdate } from '../utils';
import { checkAuth, login, logout } from '../thunk-action/user';

const initialState: UserState = {
  info: null,
  status: AuthorizationStatus.Unknown,
  requestStatus: RequestStatus.Idle,
};

const userSlice = createSlice({
  name: SliceName.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.pending, loadingUpdate)
      .addCase(checkAuth.fulfilled, successUpdate)
      .addCase(checkAuth.rejected, failedUpdate)

      .addCase(login.pending, loadingUpdate)
      .addCase(login.fulfilled, successUpdate)
      .addCase(login.rejected, failedUpdate)

      .addCase(logout.fulfilled, (state) => {
        state.status = AuthorizationStatus.NoAuth;
      });
  },
  selectors: {
    userInfo: (state: UserState) => state.info,
    authorization: (state: UserState) => state.status,
    status: (state: UserState) => state.requestStatus,
  }
});

export const { userInfo, authorization, status } = userSlice.selectors;
export default userSlice;
