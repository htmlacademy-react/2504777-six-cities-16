import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, FavoriteStatus } from '../../const';
import { ServerOffer } from '../../types/offers';

export const fetchFavorites = createAsyncThunk<ServerOffer[], undefined, {extra: AxiosInstance}>(
  'favorites/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ServerOffer[]>(ApiRoute.Favorite);
    return data;
  },
);

type ChangeProps = {
  offerId: string;
  status: FavoriteStatus;
}

export type ChangeResponse = {
  offer: ServerOffer;
  status: FavoriteStatus;
}

export const changeFavorite = createAsyncThunk<ChangeResponse, ChangeProps, {extra: AxiosInstance}>(
  'favorites/changeFavorites',
  async ({offerId, status}, { extra: api }) => {
    const response = await api.post<ServerOffer>(`${ApiRoute.Favorite}/${offerId}/${status}`);
    return {offer: response.data, status};
  },
);
