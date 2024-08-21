import { ServerOffer } from '../../types/offers';
import { groopsOffersByCity } from '../../utils';
import FavoritesLocationsItems from './favorites-locations-items';

type FavoritesProps = {
  favorites: ServerOffer[];
}

function Favorites({favorites}: FavoritesProps): JSX.Element {
  const favoritesByCities = groopsOffersByCity(favorites);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(favoritesByCities).map(([city, offers]) => <FavoritesLocationsItems key={city} city={city} places={offers} />)}
      </ul>
    </section>
  );
}

export default Favorites;
