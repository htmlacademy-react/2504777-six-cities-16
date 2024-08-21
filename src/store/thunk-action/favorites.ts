import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { ServerOffer } from '../../types/offers';
import { ChangeProps, ChangeResponse } from '../types';

export const fetchFavorites = createAsyncThunk<ServerOffer[], undefined, {extra: AxiosInstance}>(
  'favorites/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ServerOffer[]>(ApiRoute.Favorite);
    return data;
  },
);

export const changeFavorites = createAsyncThunk<ChangeResponse, ChangeProps, {extra: AxiosInstance}>(
  'favorites/changeFavorites',
  async ({offerId, status}, { extra: api }) => {
    const response = await api.post<ServerOffer>(`${ApiRoute.Favorite}/${offerId}/${status}`);
    return {offer: response.data, status};
  },
);
