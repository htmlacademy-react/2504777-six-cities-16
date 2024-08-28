import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { User } from '../../types/user';
import { saveToken, dropToken } from '../../services/token';
import { LoginData } from '../types';

export const checkAuth = createAsyncThunk<User, undefined, {extra: AxiosInstance}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User>(ApiRoute.Login);
    return data;
  },
);

export const login = createAsyncThunk<User, LoginData, {extra: AxiosInstance}>(
  'user/login',
  async (body, { extra: api }) => {
    const { data } = await api.post<User>(ApiRoute.Login, body);
    saveToken(data.token);
    return data;
  },
);

export const logout = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  },
);
