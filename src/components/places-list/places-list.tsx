import PlaceCard from '../place-card/place-card';
import { CardOffer } from '../../types/offers';
import { SpecialClassName } from '../../const';
// import { useState } from 'react';

type PlacesListProps = {
  className: SpecialClassName;
  places: CardOffer[];
  onMouseHover?: (listItem: CardOffer | null) => void;
}

function PlacesList({className, places, onMouseHover}: PlacesListProps): JSX.Element {
  // const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const fullClassName = className === SpecialClassName.Cities ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list';

  // const handleListItemHover = (listItemId: string | null) => {
  //   setActiveCardId(listItemId);

  //   onListItemHover(activeCardId);
  // };

  return (
    <div className={fullClassName}>
      {places.map((place) => <PlaceCard key={place.id} className={className} place={place} onMouseHover={onMouseHover} />)}
    </div>
  );
}

export default PlacesList;
