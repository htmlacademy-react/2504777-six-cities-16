import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { FullOffer } from '../../types/offers';
import { Reviews, Review } from '../../types/reviews';
import { PostReviewProps } from '../types';

export const fetchReviews = createAsyncThunk<Reviews, FullOffer['id'], {extra: AxiosInstance}>(
  'review/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${ApiRoute.Comments}/${offerId}`);
    return data;
  },
);

export const postReview = createAsyncThunk<Review, PostReviewProps, {extra: AxiosInstance}>(
  'review/postReviews',
  async ({ body, offerId }, { extra: api }) => {
    const { data } = await api.post<Review>(`${ApiRoute.Comments}/${offerId}`, body);
    return data;
  },
);
