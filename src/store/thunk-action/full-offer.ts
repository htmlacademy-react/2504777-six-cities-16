import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { FullOffer, Offers } from '../../types/offers';

export const fetchFullOffer = createAsyncThunk<FullOffer, FullOffer['id'], {extra: AxiosInstance}>(
  'offer/fetchFullOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<FullOffer>(`${ApiRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchOffersNearby = createAsyncThunk<Offers, FullOffer['id'], {extra: AxiosInstance}>(
  'offer/fetchOffersNearby',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offers>(`${ApiRoute.Offers}/${offerId}${ApiRoute.Nearby}`);
    return data;
  },
);
