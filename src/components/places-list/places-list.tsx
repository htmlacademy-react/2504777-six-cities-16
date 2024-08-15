import PlaceCard from '../place-card/place-card';
import { Offers, CardOffer } from '../../types/offers';
import { SpecialClassName } from '../../const';
import { setActiveOfferId } from '../../store/slices/offers';
import { sortOffersByCurrentType } from '../../utils';

type PlacesListProps = {
  className: SpecialClassName;
  offers: Offers;
  currentType: string;
}

function PlacesList({className, offers, currentType}: PlacesListProps): JSX.Element {
  const fullClassName = className === SpecialClassName.Cities ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list';

  const handleMouseHover = (offerId: CardOffer['id'] | null) => {
    setActiveOfferId(offerId);
  };

  const sortedOffers = sortOffersByCurrentType(currentType, offers);

  return (
    <div className={fullClassName}>
      {sortedOffers.map((offer) => <PlaceCard key={offer.id} className={className} offer={offer} onMouseHover={handleMouseHover} />)}
    </div>
  );
}

export default PlacesList;
