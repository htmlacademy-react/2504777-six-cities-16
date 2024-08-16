import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { State, AppDispatch } from '../store/types';
import { SixCities } from '../const';
import { getOffers } from '../store/slices/offers';
import { ActionCreatorsMapObject, bindActionCreators, AsyncThunk } from '@reduxjs/toolkit';
import { useMemo } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
  actions: Actions
): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

 type BoundActions<Actions extends ActionCreatorsMapObject> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
  ? BoundAsyncThunk<Actions[key]>
  : Actions[key];
 };

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
  ...arg: Parameters<Thunk>
 ) => ReturnType<ReturnType<Thunk>>;


export const useOffersByCity = (city:SixCities) => {
  const offers = useAppSelector(getOffers);
  const offersByCity = offers.filter((offer) => offer.city.name === city as string);

  return {
    offers: offersByCity,
    isEmpty: offersByCity.length === 0,
  };
};
