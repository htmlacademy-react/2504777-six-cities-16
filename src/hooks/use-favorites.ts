import { useAppSelector } from '.';
import { getFavorites } from '../store/slices/favorites';
import { getStatus } from '../store/slices/offers';
import { RequestStatus } from '../const';

export function useFavorites() {
  const favorites = useAppSelector(getFavorites);
  const requestStatus = useAppSelector(getStatus);

  return {
    favorites,
    count: favorites.length,
    hasFavorites: favorites.length !== 0,
    isIdle: requestStatus === RequestStatus.Idle,
    isFailed: requestStatus === RequestStatus.Failed,
    isLoading: requestStatus === RequestStatus.Loading,
  };
}
