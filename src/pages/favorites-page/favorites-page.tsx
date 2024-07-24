import { Helmet } from 'react-helmet-async';
import { Title } from '../../const';
import { CardOffer } from '../../types/offers';
import FavoritesLocationsItems from '../../components/favorites-locations-items/favorites-locations-items';
import { groopsOffersByCity } from '../../utils';

type FavoritesPageProps = {
  favoritesOffers: CardOffer[];
}

function FavoritesPage({favoritesOffers}: FavoritesPageProps): JSX.Element {
  const favoriteOffersByCities = groopsOffersByCity(favoritesOffers);

  // Пыталась использовать groupBy, получила: {Paris: Array(2), Amsterdam: Array(1), Hamburg: Array(1)}, но ругается TS
  // const offersByCity: Record<string, CardOffer[]> = Object.groupBy(favoritesOffers, (item: CardOffer) => item.city.name);

  return (
    <>
      <Helmet>
        <title>{Title.Favorites}</title>
      </Helmet>

      {
        favoritesOffers.length ? (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.entries(favoriteOffersByCities).map(([city, offers]) => <FavoritesLocationsItems key={city} city={city} places={offers} />)}
                </ul>
              </section>
            </div>
          </main>
        )
          : (
            <main className="page__main page__main--favorites page__main--favorites-empty">
              <div className="page__favorites-container container">
                <section className="favorites favorites--empty">
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                  </div>
                </section>
              </div>
            </main>
          )
      }
    </>
  );
}

export default FavoritesPage;
