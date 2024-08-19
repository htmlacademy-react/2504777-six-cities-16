import { useEffect } from 'react';
import { useAppDispatch } from '.';
import { fetchFavorites } from '../store/thunk-action/favorites';
import { useFavorites } from './use-favorites';

export function useFavoritesCount() {
  const dispatch = useAppDispatch();

  const { count, isIdle} = useFavorites();

  useEffect(() => {
    if (isIdle) {
      dispatch(fetchFavorites());
    }
  }, [isIdle, dispatch]);

  return count;
}
