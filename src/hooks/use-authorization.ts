import { useAppSelector } from '.';
import { authorization } from '../store/slices/user';
import { AuthorizationStatus } from '../const';

export function useAuthorization() {
  const authorizationStatus = useAppSelector(authorization);

  return {
    authorizationStatus,
    isAuthChecked: authorizationStatus !== AuthorizationStatus.Unknown,
  };
}
