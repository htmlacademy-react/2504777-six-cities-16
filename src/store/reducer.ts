import { createReducer } from '@reduxjs/toolkit';
import { CardOffer } from '../types/offers';
import { changeCity } from './action';
import { DEFAULT_CITY } from '../const';
import { cardOffers } from '../mocks/offers/card-offers';

type initialStateType = {
  city: string;
  offers: CardOffer[];
}

const initialState: initialStateType = {
  city: DEFAULT_CITY,
  offers: cardOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});
