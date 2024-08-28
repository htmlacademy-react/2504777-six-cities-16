import { useAppSelector } from '.';
import { favoriteOffers, status } from '../store/slices/favorites';
import { RequestStatus } from '../const';

export function useFavorites() {
  const favorites = useAppSelector(favoriteOffers);
  const requestStatus = useAppSelector(status);

  return {
    favorites,
    count: favorites.length,
    hasFavorites: favorites.length !== 0,
    isIdle: requestStatus === RequestStatus.Idle,
    isFailed: requestStatus === RequestStatus.Failed,
    isLoading: requestStatus === RequestStatus.Loading,
  };
}
