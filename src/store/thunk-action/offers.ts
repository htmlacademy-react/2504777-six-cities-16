import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { Offers } from '../../types/offers';

export const fetchOffers = createAsyncThunk<Offers, undefined, {extra: AxiosInstance}>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(ApiRoute.Offers);
    return data;
  },
);
