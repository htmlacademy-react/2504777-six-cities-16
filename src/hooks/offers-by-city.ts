import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { SixCities, RequestStatus } from '../const';
import { getOffers, getLoadingStatus, getStatus } from '../store/slices/offers';
import { fetchOffers } from '../store/thunk-action/offers';
import { useMemo } from 'react';

export function useOffersByCity(city:SixCities) {
  const dispatch = useAppDispatch();

  const offers = useAppSelector(getOffers);
  const isLoading = useAppSelector(getLoadingStatus);
  const status = useAppSelector(getStatus);

  //? Нужно ли useMemo
  const offersByCity = useMemo(() => offers.filter((offer) => offer.city.name === city as string), [offers, city]);

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

