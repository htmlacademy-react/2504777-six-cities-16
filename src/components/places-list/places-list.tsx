import PlaceCard from '../place-card/place-card';
import { CardOffer } from '../../types/offers';
import { PlacesClassName } from '../../const';

type PlacesListProps = {
  className: PlacesClassName;
  places: CardOffer[];
}

function PlacesList({className, places}: PlacesListProps): JSX.Element {
  const fullClassName = className === PlacesClassName.Cities ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list';
  return (
    <div className={fullClassName}>
      {places.map((place) => <PlaceCard key={place.id} className={className} place={place} />)}
    </div>
  );
}

export default PlacesList;
