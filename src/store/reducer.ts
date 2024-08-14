import { createReducer } from '@reduxjs/toolkit';
import { Offers, FullOffer } from '../types/offers';
import { Reviews } from '../types/reviews';
import { changeCity, changeSortingType, loadOffersList, requireAuthorization, setError, setLoadingStatus, loadFullOffer, loadOffersNearby, loadReviews } from './actions';
import { DEFAULT_CITY, SixCities, DEFAULT_SORTING_TYPE, AuthorizationStatus } from '../const';

type initialStateType = {
  city: SixCities;
  // offers: Offers;
  sortingType: string;
  authorizationStatus: AuthorizationStatus;
  error: null | string;

  // isLoading: boolean;
  // fullOffer: null | FullOffer;
  // offersNearby: Offers;
  // reviews: Reviews;
}

const initialState: initialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  sortingType: DEFAULT_SORTING_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isLoading: false,

  fullOffer: null,
  offersNearby: [],
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(loadOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(loadFullOffer, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
