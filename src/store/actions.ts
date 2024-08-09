import { createAction } from '@reduxjs/toolkit';
import { SixCities, AuthorizationStatus } from '../const';
import { Offers } from '../types/offers';

export const changeCity = createAction('changeCity', (value: SixCities) => ({payload: value,}));
export const loadOffersList = createAction('loadOffersList', (value: Offers) => ({payload: value,}));
export const changeSortingType = createAction('changeSortingType', (value: string) =>({payload: value,}));
export const requireAuthorization = createAction('requireAuthorization', (value: AuthorizationStatus) => ({payload: value}));
export const setError = createAction('setError', (value: null | string) => ({payload: value}));
