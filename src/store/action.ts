import { createAction } from '@reduxjs/toolkit';
import { SixCities, AuthorizationStatus } from '../const';
import { CardOffer } from '../types/offers';

export const changeCity = createAction('changeCity', (value: SixCities) => ({payload: value,}));
export const loadOffersList = createAction('loadOffersList', (value: CardOffer[]) => ({payload: value,}));
export const changeSortingType = createAction('changeSortingType', (value: string) =>({payload: value,}));
export const requireAuthorization = createAction('requireAuthorization', (value: AuthorizationStatus) => ({payload: value}));
