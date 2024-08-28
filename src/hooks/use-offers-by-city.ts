import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { SixCities, RequestStatus } from '../const';
import { allOffers, status } from '../store/slices/offers';
import { fetchOffers } from '../store/thunk-action/offers';

export function useOffersByCity(city:SixCities) {
  const dispatch = useAppDispatch();

  const offers = useAppSelector(allOffers);
  const requestStatus = useAppSelector(status);

  const offersByCity = offers.filter((offer) => offer.city.name === city as string);

  useEffect(() => {
    if (requestStatus === RequestStatus.Idle) {
      dispatch(fetchOffers());
    }
  });

  return {
    offers: offersByCity,
    isEmpty: offersByCity.length === 0,
    isLoading: requestStatus === RequestStatus.Loading,
  };
}

