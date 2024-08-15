import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, RequestStatus, SliceName } from '../../const';
import { checkAuth, login, logout } from '../thunk-action/user';
import { UserState } from '../types';
import { loadingUpdate, successUpdate, failedUpdate } from '../utils';
import { State } from '../types';

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
  // selectors: {
  //   userInfo: (state: UserState) => state.info,
  //   authorizationStatus: (state: UserState) => state.status,
  //   requestStatus: (state: UserState) => state.requestStatus,
  // }
});

export const getUserInfo = (state: State) => state[SliceName.User].info;
export const getAuthorizationStatus = (state: State) => state[SliceName.User].status;
export const getAuthCheckedStatus = (state: State) => state[SliceName.User].status !== AuthorizationStatus.Unknown;
// export const { userInfo, authorizationStatus, requestStatus } = userSlice.selectors;
export default userSlice;
