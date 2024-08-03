import { createReducer } from '@reduxjs/toolkit';
import { CardOffer } from '../types/offers';
import { changeCity, changeSortingType } from './action';
import { DEFAULT_CITY, SixCities, DEFAULT_SORTING_TYPE } from '../const';
import { cardOffers } from '../mocks/offers/card-offers';

type initialStateType = {
  city: SixCities;
  offers: CardOffer[];
  sortingType: string;
}

const initialState: initialStateType = {
  city: DEFAULT_CITY,
  offers: cardOffers,
  sortingType: DEFAULT_SORTING_TYPE
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload;
    });
});
