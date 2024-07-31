import { createReducer } from '@reduxjs/toolkit';
import { CardOffer } from '../types/offers';
import { changeCity } from './action';

type initialStateType = {
  city: string;
  offers: CardOffer[];
}

const initialState: initialStateType = {
  city: '',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});
