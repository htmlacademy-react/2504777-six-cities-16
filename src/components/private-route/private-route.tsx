import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isLoginLocation?: boolean;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, isLoginLocation, children}: PrivateRouteProps) {
  if (isLoginLocation) {
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
