import PlaceCard from '../place-card/place-card';
import { CardOffer } from '../../types/offers';
import { PlaceCardClassName } from '../../const';

type PlacesListProps = {
  places: CardOffer[];
}

function PlacesList({places}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <PlaceCard key={place.id} className={PlaceCardClassName.Cities} place={place} />)}
    </div>
  );
}

export default PlacesList;
