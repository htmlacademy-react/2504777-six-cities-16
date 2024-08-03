import { createAction } from '@reduxjs/toolkit';
import { Cities } from '../const';

export const changeCity = createAction('changeCity', (value: Cities) => ({payload: value,}));
export const fillingOffersList = createAction('fillingOffersList');
export const changeSortingType = createAction('changeSortingType', (value: string) =>({payload: value,}));
