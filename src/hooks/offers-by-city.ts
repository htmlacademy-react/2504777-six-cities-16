import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { SixCities, RequestStatus } from '../const';
import { getOffers, getLoadingStatus, getStatus } from '../store/slices/offers';
import { fetchOffers } from '../store/thunk-action/offers';

export function useOffersByCity(city:SixCities) {
  const dispatch = useAppDispatch();

  const offers = useAppSelector(getOffers);
  const isLoading = useAppSelector(getLoadingStatus);
  const status = useAppSelector(getStatus);

  const offersByCity = offers.filter((offer) => offer.city.name === city as string);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      dispatch(fetchOffers());
    }
  });

  return {
    offers: offersByCity,
    isEmpty: offersByCity.length === 0,
    isLoading,
  };
}

