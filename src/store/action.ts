import { createAction } from '@reduxjs/toolkit';
import { CITIES } from '../const';

export const changeCity = createAction('changeCity', (value: CITIES) => ({payload: value,}));
export const fillingOffersList = createAction('fillingOffersList');
