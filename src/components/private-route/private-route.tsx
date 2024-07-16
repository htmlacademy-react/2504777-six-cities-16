import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate, useLocation } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps) {
  const location = useLocation();

  if (location.pathname === AppRoute.Login as string) {
    return (
      authorizationStatus === AuthorizationStatus.NoAuth
        ? children
        : <Navigate to={AppRoute.Root} />
    );
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
export default PrivateRoute;
