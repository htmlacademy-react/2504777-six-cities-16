import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthCheckedStatus } from '../../store/slices/user';
// import { useEffect } from 'react';
// import { fetchOffers } from '../../store/thunk-action/offers';

function App(): JSX.Element {
  // const dispatch = useAppDispatch();

  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  // useEffect(() => {
  //   dispatch(fetchOffers());
  // });

  if (!isAuthChecked) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout />}
          >
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute onlyGuests>
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage/>}
            />
            <Route
              path={AppRoute.Error}
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

