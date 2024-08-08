import { createReducer } from '@reduxjs/toolkit';
import { CardOffer } from '../types/offers';
import { changeCity, changeSortingType, loadOffersList, requireAuthorization } from './action';
import { DEFAULT_CITY, SixCities, DEFAULT_SORTING_TYPE, AuthorizationStatus } from '../const';
// import { cardOffers } from '../mocks/offers/card-offers';

type initialStateType = {
  city: SixCities;
  offers: CardOffer[];
  sortingType: string;
  authorizationStatus: AuthorizationStatus;
}

const initialState: initialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  sortingType: DEFAULT_SORTING_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    });
});
