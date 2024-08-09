import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { changeCity, changeSortingType, loadOffersList, requireAuthorization, setError } from './actions';
import { DEFAULT_CITY, SixCities, DEFAULT_SORTING_TYPE, AuthorizationStatus } from '../const';
// import { cardOffers } from '../mocks/offers/card-offers';

type initialStateType = {
  city: SixCities;
  offers: Offers;
  sortingType: string;
  authorizationStatus: AuthorizationStatus;
  error: null | string;
}

const initialState: initialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  sortingType: DEFAULT_SORTING_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    });
});
