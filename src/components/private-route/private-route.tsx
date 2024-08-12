// import { AppRoute, AuthorizationStatus } from '../../const';
// import { Navigate } from 'react-router-dom';
// import { useAppSelector } from '../../hooks';

// type PrivateRouteProps = {
//   onlyUnAuth?: boolean;
//   children: JSX.Element;
// }

// function PrivateRoute({ onlyUnAuth, children}: PrivateRouteProps) {
//   const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

//   if (onlyUnAuth) {
//     return (
//       authorizationStatus === AuthorizationStatus.NoAuth
//         ? children
//         : <Navigate to={AppRoute.Root} />
//     );
//   }
//   return (
//     authorizationStatus === AuthorizationStatus.Auth
//       ? children
//       : <Navigate to={AppRoute.Login} />
//   );
// }
// export default PrivateRoute;

import type { ReactNode } from 'react';
import type { Location } from 'react-router-dom';

import { Navigate, useLocation } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';

import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  onlyGuests?: boolean;
  children: ReactNode;
}

type FromState = {
  from?: Location;
};

function PrivateRoute({onlyGuests, children}: PrivateRouteProps) {
  const location: Location<FromState> = useLocation() as Location<FromState>;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

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
