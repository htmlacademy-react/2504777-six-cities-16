import PlaceCard from '../place-card/place-card';
import { CardOffer } from '../../types/offers';
import { SpecialClassName } from '../../const';
import { useState } from 'react';

type PlacesListProps = {
  className: SpecialClassName;
  places: CardOffer[];
}

function PlacesList({className, places}: PlacesListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleHover = (activeCardId: string | null) => {
    setActiveCard(activeCardId);
  };

  const fullClassName = className === SpecialClassName.Cities ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list';
  return (
    <div className={fullClassName}>
      {places.map((place) => <PlaceCard key={place.id} className={className} place={place} onHover={handleHover} />)}
    </div>
  );
}

export default PlacesList;
