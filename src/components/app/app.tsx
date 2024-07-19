import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { CardOffer } from '../../types/offers';
import { AppRoute, AuthorizationStatus } from '../../const';
import Layout from '../layout/layout';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
	cardOffers: CardOffer[];
  // favoritesOffers: CardOffer[];
}

function App({ cardOffers }: AppProps): JSX.Element {
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
              element={<MainPage cardOffers={cardOffers} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.Auth}
                >
                  <FavoritesPage favoritesOffers={cardOffers.filter((offer) => offer.isFavorite)} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.NoAuth}
                  isLoginLocation
                >
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage />}
            />
          </Route>
          <Route
            path={AppRoute.Error}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>


  );
}

export default App;

