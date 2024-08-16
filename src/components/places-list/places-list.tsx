import PlaceCard from '../place-card/place-card';
import { Offers, CardOffer } from '../../types/offers';
import { SpecialClassName } from '../../const';

type PlacesListProps = {
  className: SpecialClassName;
  offers: Offers;
  onMouseHover?: (offerId: CardOffer['id'] | null) => void;
}

function PlacesList({className, offers, onMouseHover }: PlacesListProps): JSX.Element {
  const fullClassName = className === SpecialClassName.Cities ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list';

  return (
    <div className={fullClassName}>
      {offers.map((offer) => <PlaceCard key={offer.id} className={className} offer={offer} onMouseHover={onMouseHover} />)}
    </div>
  );
}

export default PlacesList;
