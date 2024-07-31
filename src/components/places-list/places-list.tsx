import PlaceCard from '../place-card/place-card';
import { CardOffer } from '../../types/offers';
import { SpecialClassName } from '../../const';

type PlacesListProps = {
  className: SpecialClassName;
  places: CardOffer[];
  onMouseHover?: (listItemId: string | null) => void;
}

function PlacesList({className, places, onMouseHover}: PlacesListProps): JSX.Element {
  const fullClassName = className === SpecialClassName.Cities ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list';

  return (
    <div className={fullClassName}>
      {places.map((place) => <PlaceCard key={place.id} className={className} place={place} onMouseHover={onMouseHover} />)}
    </div>
  );
}

export default PlacesList;
