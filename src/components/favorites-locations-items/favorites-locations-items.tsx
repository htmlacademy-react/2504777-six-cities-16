
import PlaceCard from '../place-card/place-card';
import { CardOffer } from '../../types/offers';
import { PlacesClassName } from '../../const';

type FavoritesLocationsItemsProps = {
  city: string;
  places: CardOffer[];
}

function FavoritesLocationsItems({city, places}: FavoritesLocationsItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {places.map((place) => <PlaceCard key={place.id} className={PlacesClassName.Favorites} place={place}/>)}
      </div>
    </li>
  );
}

export default FavoritesLocationsItems;
