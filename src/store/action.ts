import { createAction } from '@reduxjs/toolkit';
import { SixCities } from '../const';

export const changeCity = createAction('changeCity', (value: SixCities) => ({payload: value,}));
export const fillingOffersList = createAction('fillingOffersList');
export const changeSortingType = createAction('changeSortingType', (value: string) =>({payload: value,}));
