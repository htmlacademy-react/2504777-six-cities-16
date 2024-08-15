import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { State, AppDispatch } from '../store/types';
import { SixCities } from '../const';
import { getOffers } from '../store/slices/offers';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useOffersByCity = (city:SixCities) => {
  const offers = useAppSelector(getOffers);
  const offersByCity = offers.filter((offer) => offer.city.name === city as string);

  return {
    offers: offersByCity,
    isEmpty: offersByCity.length === 0,
  };
};
