import type { ReactNode } from 'react';
import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAuthorization } from '../../hooks/use-authorization';

type PrivateRouteProps = {
  onlyGuests?: boolean;
  children: ReactNode;
}

type FromState = {
  from?: Location;
};

function PrivateRoute({onlyGuests, children}: PrivateRouteProps) {
  const location: Location<FromState> = useLocation() as Location<FromState>;
  const { authorizationStatus } = useAuthorization();

  if (onlyGuests && authorizationStatus === AuthorizationStatus.Auth) {
    const from = location.state?.from || {pathname: AppRoute.Root};
    return <Navigate to={from} />;
  }

  if (!onlyGuests && authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate state={{from: location}} to={AppRoute.Login} />;
  }

  return children;
}

export default PrivateRoute;
