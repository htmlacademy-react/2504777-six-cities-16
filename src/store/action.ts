import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (value: string) => ({payload: value,}));
export const fillingOffersList = createAction('fillingOffersList');
