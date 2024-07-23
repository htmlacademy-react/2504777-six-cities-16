
import PlaceCard from '../place-card/place-card';
import { CardOffer } from '../../types/offers';
import { SpecialClassName, AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type FavoritesLocationsItemsProps = {
  city: string;
  places: CardOffer[];
}

function FavoritesLocationsItems({city, places}: FavoritesLocationsItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Root}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {places.map((place) => <PlaceCard key={place.id} className={SpecialClassName.Favorites} place={place}/>)}
      </div>
    </li>
  );
}

export default FavoritesLocationsItems;
